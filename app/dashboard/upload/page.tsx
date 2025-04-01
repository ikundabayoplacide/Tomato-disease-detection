"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, FileUp, Upload, X } from "lucide-react"
import Image from "next/image"

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles([...files, ...newFiles])

      // Create preview URLs
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
      setPreviews([...previews, ...newPreviews])
    }
  }

  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)

    const newPreviews = [...previews]
    URL.revokeObjectURL(newPreviews[index])
    newPreviews.splice(index, 1)
    setPreviews(newPreviews)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Images</TabsTrigger>
          <TabsTrigger value="camera">Use Camera</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Tomato Leaf Images</CardTitle>
              <CardDescription>Upload high-resolution images of tomato leaves for disease detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="field">Field Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select field location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="field-a">Field A</SelectItem>
                      <SelectItem value="field-b">Field B</SelectItem>
                      <SelectItem value="field-c">Field C</SelectItem>
                      <SelectItem value="greenhouse">Greenhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="section">Section</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Input id="notes" placeholder="Add any additional notes here" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Upload Images</Label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                  <FileUp className="h-8 w-8 mb-4 text-muted-foreground" />
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm font-semibold">Drag and drop files here or click to browse</p>
                    <p className="mb-4 text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, HEIC (Max size: 10MB)
                    </p>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                      <Upload className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>

              {previews.length > 0 && (
                <div className="grid gap-2">
                  <Label>Selected Images ({files.length})</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square rounded-md overflow-hidden border">
                          <Image
                            src={preview || "/placeholder.svg"}
                            alt={`Preview ${index}`}
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button disabled={files.length === 0}>
                <Upload className="mr-2 h-4 w-4" />
                Upload and Analyze
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="camera" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Use Camera</CardTitle>
              <CardDescription>Take photos of tomato leaves directly using your device camera</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="field">Field Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select field location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="field-a">Field A</SelectItem>
                      <SelectItem value="field-b">Field B</SelectItem>
                      <SelectItem value="field-c">Field C</SelectItem>
                      <SelectItem value="greenhouse">Greenhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="section">Section</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                <Camera className="h-8 w-8 mb-4 text-muted-foreground" />
                <p className="mb-4 text-sm font-semibold">Click below to access your camera</p>
                <Button>
                  <Camera className="mr-2 h-4 w-4" />
                  Open Camera
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Note: Camera access requires permission from your browser</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

