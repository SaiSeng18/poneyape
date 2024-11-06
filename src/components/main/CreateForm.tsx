"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Timestamp } from "firebase/firestore";
import { Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { placeholderUserData } from "@/constants";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { firebaseClient } from "@/lib/firebase";
import { WebsiteData } from "@/types";

import { WebsiteDetailDocument } from "../../../prismicio-types";
import SiteView from "./SiteView";

const formSchema = z.object({
  cover: z.instanceof(File).optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  vision: z.string().min(1, "Vision is required"),
  tags: z.string().array().min(1, "At least one tag is required"),
  typography: z.string().array().min(1, "At least one typography is required"),
  colorPalette: z.string().array().min(1, "At least one color is required"),
  authors: z.string().array(),
  screens: z.instanceof(File).array().optional(),
});

const availableTags = [
  "Blog",
  "Portfolio",
  "E-commerce",
  "Landing Page",
  "Corporate",
  "Personal",
];
const availableTypography = [
  "Sans-serif",
  "Serif",
  "Monospace",
  "Display",
  "Handwriting",
];
const availableAuthors = [
  { name: "John Doe", id: "1" },
  { name: "Jane Smith", id: "2" },
  { name: "Alice Johnson", id: "3" },
  { name: "Bob Williams", id: "4" },
  { name: "Emma Brown", id: "5" },
];

export default function CreateForm({
  details,
}: {
  details: WebsiteDetailDocument<string>;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedScreens, setSelectedScreens] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState("#000000");

  const user = useCurrentUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      vision: "",
      tags: [],
      typography: [],
      colorPalette: [],
      authors: [],
    },
  });

  const data = form.watch();
  const isValid = form.formState.isValid;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      console.error("No user logged in");
      return;
    }

    try {
      const cover = await firebaseClient.uploadImage(values.cover!);
      const screens = await firebaseClient.uploadMultipleImages(
        values.screens || [],
      );

      // const { cover, ...filteredValues } = values;

      const formData = {
        ...values,
        publishDate: Timestamp.fromDate(new Date()).seconds,
        owner: user.uid,
        cover: cover.url,
        screens: screens.urls,
      } as WebsiteData;

      const res = await firebaseClient.uploadWebsite(formData);
      if (res.success) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col gap-6 px-6 py-10 md:px-16 md:py-10">
      <div
        className="flex flex-col justify-between align-top"
        aria-label="Header"
      >
        <div className="flex justify-between">
          <p className="font-semibold">Submit a website</p>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="c-outline disabled:cursor-not-allowed"
                disabled={!isValid}
              >
                Preview
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-screen max-w-screen-md overflow-y-scroll bg-white">
              <SiteView
                details={details}
                data={{
                  ...data,
                  authors: [],
                  cover: selectedImage || "/eg.png",
                  owner: {
                    email: "",
                    userId: "",
                    username: "",
                    profileImage: "",
                  },
                  publishDate: Timestamp.fromDate(new Date()).seconds,
                  screens: selectedScreens,
                }}
                user={placeholderUserData}
              />
            </DialogContent>
          </Dialog>
        </div>

        <p className="font-roboto text-[32px] capitalize md:text-[148px] md:leading-[177px] md:tracking-[-10px]">
          Your Website
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="cover"
            render={({ field }) => (
              <FormItem className="mb-[120px]">
                {/* <FormLabel>Cover Image</FormLabel> */}
                <FormControl>
                  <div className="space-y-4">
                    <Label
                      htmlFor="cover"
                      className="flex h-[100px] w-full cursor-pointer items-center justify-center rounded-xl border border-dashed border-gray-600 bg-gray-100"
                    >
                      {selectedImage
                        ? "Change cover image"
                        : "Upload a cover image"}
                    </Label>
                    <Input
                      id="cover"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            setSelectedImage(event.target?.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    {selectedImage && (
                      <div className="relative w-full">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="absolute -right-2 -top-2 h-8 w-8 rounded-full"
                          onClick={() => {
                            setSelectedImage(null);
                            field.onChange(undefined);
                            // Reset the file input
                            const fileInput = document.getElementById(
                              "cover",
                            ) as HTMLInputElement;
                            if (fileInput) fileInput.value = "";
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Image
                          src={selectedImage}
                          alt="Preview"
                          width={1500}
                          height={1500}
                          priority
                          className="h-auto w-full rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Title</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <Textarea
                      className=""
                      placeholder="Enter website title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Description</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <Textarea
                      placeholder="What does the page do? What purpose does it serve?"
                      className="flex-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vision"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Vision</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <Textarea
                      placeholder="How do you want to impact the viewer, the user?"
                      className="flex-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Tags</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <div className="flex flex-col flex-wrap items-start gap-2 md:items-end">
                      <Select
                        onValueChange={(value) => {
                          if (!field.value.includes(value)) {
                            field.onChange([...field.value, value]);
                          }
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Add tag" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTags.map((tag) => (
                            <SelectItem key={tag} value={tag}>
                              {tag}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="flex flex-wrap gap-2">
                        {field.value.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="shrink-0 text-sm"
                          >
                            {tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground ml-2 h-auto p-0"
                              onClick={() => {
                                const newTags = field.value.filter(
                                  (t) => t !== tag,
                                );
                                field.onChange(newTags);
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="typography"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Typography</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <div className="flex flex-col flex-wrap items-start gap-2 md:items-end">
                      <Select
                        onValueChange={(value) => {
                          if (!field.value.includes(value)) {
                            field.onChange([...field.value, value]);
                          }
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Add typography" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTypography.map((font) => (
                            <SelectItem key={font} value={font}>
                              {font}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="flex flex-wrap gap-2">
                        {field.value.map((font) => (
                          <Badge
                            key={font}
                            variant="outline"
                            className="shrink-0 text-sm"
                          >
                            {font}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground ml-2 h-auto p-0"
                              onClick={() => {
                                const newFonts = field.value.filter(
                                  (f) => f !== font,
                                );
                                field.onChange(newFonts);
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="colorPalette"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Color Palette</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <div className="flex flex-1 flex-col items-start space-y-4 md:items-end">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="color"
                          value={currentColor}
                          onChange={(e) => setCurrentColor(e.target.value)}
                          className="h-10 w-20 cursor-pointer"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (!field.value.includes(currentColor)) {
                              field.onChange([...field.value, currentColor]);
                            }
                          }}
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add Color
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {field.value.map((color, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className="h-8 w-8 rounded-full border"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-sm">{color}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const newColors = field.value.filter(
                                  (_, i) => i !== index,
                                );
                                field.onChange(newColors);
                              }}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authors"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4 border-b border-dashed border-black pb-10 md:flex-row md:justify-between md:pb-16">
                <FormLabel className="flex-1 text-2xl">Authors</FormLabel>
                <div className="flex flex-1 flex-col items-start gap-2 md:items-end">
                  <FormControl>
                    <div className="item-end flex flex-1 flex-col flex-wrap items-start gap-2 md:items-end">
                      <Select
                        onValueChange={(value) => {
                          const authorId = value;
                          if (!field.value.includes(authorId)) {
                            field.onChange([...field.value, authorId]);
                          }
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Add author" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableAuthors.map((author) => (
                            <SelectItem
                              key={author.id}
                              value={author.id.toString()}
                            >
                              {author.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="flex flex-wrap gap-2">
                        {field.value.map((authorId) => {
                          const author = availableAuthors.find(
                            (a) => a.id === authorId,
                          );
                          return (
                            <Badge
                              key={authorId}
                              variant="outline"
                              className="shrink-0 text-sm"
                            >
                              {author ? author.name : `Author ${authorId}`}
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground ml-2 h-auto p-0"
                                onClick={() => {
                                  const newAuthors = field.value.filter(
                                    (id) => id !== authorId,
                                  );
                                  field.onChange(newAuthors);
                                }}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <div className="w-full">
            <p className="mb-10 mt-[120px] font-roboto text-[32px] capitalize md:text-[48px]">
              Other Screens of the Website
            </p>{" "}
            <FormField
              control={form.control}
              name="screens"
              render={({ field }) => (
                <FormItem className="mb-[120px]">
                  <FormControl>
                    <div className="space-y-10">
                      <Label
                        htmlFor="screen"
                        className="flex h-[100px] w-full cursor-pointer items-center justify-center rounded-xl border border-dashed border-gray-600 bg-gray-100"
                      >
                        {selectedScreens.length > 0
                          ? "Add more screens"
                          : "Upload screens"}
                      </Label>
                      <Input
                        id="screen"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        multiple
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files) {
                            const newFiles = Array.from(files);
                            field.onChange(newFiles);
                            newFiles.forEach((file) => {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setSelectedScreens((prev) => [
                                  ...prev,
                                  event.target?.result as string,
                                ]);
                              };
                              reader.readAsDataURL(file);
                            });
                          }
                        }}
                      />
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {selectedScreens.map((screen, index) => (
                          <div key={index} className="relative w-full">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="absolute -right-2 -top-2 h-8 w-8 rounded-full"
                              onClick={() => {
                                setSelectedScreens((prev) =>
                                  prev.filter((_, i) => i !== index),
                                );
                                const newFiles = (field.value ?? []).filter(
                                  (_, i) => i !== index,
                                );
                                field.onChange(newFiles);
                              }}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <Image
                              src={screen}
                              height={400}
                              width={400}
                              alt={`Screen preview ${index + 1}`}
                              className="h-auto w-full rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="c-primary h-auto w-full">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
