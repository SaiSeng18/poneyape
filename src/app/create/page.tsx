"use client";

import SiteView from "@/components/main/SiteView";
import { placeholderUserData, tags } from "@/constants";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Cross from "@/components/Cross";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import Tag from "@/components/common/Tag";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { useFirebase } from "@/hooks/useFirebase";
import { toast } from "@/hooks/use-toast";

export default function CreatePage() {
  const [newColorPalette, setNewColorPalette] = useState("");
  const { currentUser } = useFirebase();
  const [currentData, setCurrentData] = useState<WebsiteData>({
    title: "",
    description: "",
    vision: "",
    tags: [],
    typography: [],
    colorPalette: [],
    authors: [],
    // set when submitted
    publishDate: 0,
    ownerId: "",
  });

  const submit = () => {
    currentData.publishDate = Timestamp.fromDate(new Date()).seconds;
    currentData.ownerId = currentUser!.uid;

    addDoc(collection(db, "triage-websites"), currentData);
  };

  return (
    <>
      <section className="flex flex-col gap-6 px-6 py-10 md:px-16 md:py-10">
        <div
          className="flex flex-col justify-between align-top"
          aria-label="Header"
        >
          <div className="flex justify-between">
            <p className="font-semibold">Submit a website</p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="c-outline">Preview</button>
              </DialogTrigger>
              <DialogContent className="max-h-screen overflow-y-scroll bg-white lg:max-w-screen-lg">
                <SiteView data={currentData} user={placeholderUserData} />
              </DialogContent>
            </Dialog>
          </div>

          <p className="font-roboto text-[148px] capitalize leading-[177px] tracking-[-10px]">
            Your Website
          </p>
        </div>
        {/* <Image
          src="/eg.png"
          alt="Cover Image"
          layout="responsive"
          width={16}
          height={9}
        /> */}
        <h3 className="font-semibold uppercase">{currentData.title}</h3>
      </section>
      <section
        className="flex flex-col gap-10 px-6 py-10 md:gap-16 md:px-16 md:py-[120px]"
        aria-label="Website Details"
      >
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Cover Image</h5>
          <div className="flex h-[100px] w-[600px] items-center justify-center rounded-xl border border-dashed border-gray-500 bg-gray-100">
            Upload a cover Image
          </div>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Description</h5>
          <Textarea
            rows={4}
            className="border-gray-500 md:max-w-[600px]"
            placeholder="What does the page do? What purpose does it serve?"
            value={currentData.description}
            onChange={(e) =>
              setCurrentData({ ...currentData, description: e.target.value })
            }
          />
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Vision</h5>
          <Textarea
            rows={4}
            className="border-gray-500 md:max-w-[600px]"
            placeholder="How do you want to impact the viewer, the user?"
            value={currentData.vision}
            onChange={(e) =>
              setCurrentData({ ...currentData, vision: e.target.value })
            }
          />
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Typography</h5>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Color Palette</h5>
          <div className="flex flex-col gap-4">
            <Input
              className="ms-auto max-w-[200px] border-gray-500"
              placeholder="Add a hex color!"
              value={newColorPalette}
              onChange={(e) => setNewColorPalette(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (currentData.colorPalette.includes(newColorPalette)) {
                    toast({
                      title: "Uh Oh!",
                      description: "You can't add the same color twice.",
                      variant: "destructive"
                    });
                  } else {
                    setCurrentData({
                      ...currentData,
                      colorPalette: [
                        ...currentData.colorPalette,
                        newColorPalette,
                      ],
                    });
                  }
                  setNewColorPalette("");
                }
              }}
            />
            <div className="flex">
              {currentData.colorPalette.map((color) => (
                <div
                  key={color}
                  className="flex h-[170px] w-16 flex-col items-center justify-between rounded-[40px] py-4 pb-[11px]"
                  style={{ background: color }}
                >
                  <button
                    type="button"
                    className="mix-blend-difference invert"
                    onClick={() =>
                      setCurrentData({
                        ...currentData,
                        colorPalette: currentData.colorPalette.filter(
                          (e) => e !== color,
                        ),
                      })
                    }
                  >
                    <Cross />
                  </button>
                  <span
                    className="mix-blend-difference invert"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Tags</h5>
          <div className="flex gap-2">
            {currentData.tags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                clickable={true}
                variant="outline"
                onClick={() =>
                  setCurrentData({
                    ...currentData,
                    tags: currentData.tags.filter((e) => e !== tag),
                  })
                }
              />
            ))}
            <Select
              onValueChange={(e) =>
                setCurrentData({
                  ...currentData,
                  tags: [...currentData.tags, e],
                })
              }
            >
              <SelectTrigger className="w-[280px] border-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <PlusIcon />
                  Add Tag
                </div>
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectGroup>
                  <SelectLabel>
                    {tags.length === currentData.tags.length
                      ? "All tags added!"
                      : "Tag"}
                  </SelectLabel>
                  {tags
                    .filter((tag) => !currentData.tags.includes(tag))
                    .map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <h1 className="mt-10 font-bold">Other Screens of the Website</h1>
        <div className="flex flex-col gap-4">
          <div className="flex h-[100px] w-[500px] items-center justify-center rounded-xl border border-dashed border-gray-600 bg-gray-100">
            Upload an Image
          </div>
        </div>
        <button className="c-primary" onClick={submit}>
          Submit
        </button>
      </section>
    </>
  );
}
