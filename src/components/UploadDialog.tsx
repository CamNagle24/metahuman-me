import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export const UploadDialog = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check if it's a video file
      if (!selectedFile.type.startsWith('video/')) {
        toast.error("Please upload a video file");
        return;
      }
      
      // Check file size (max 100MB)
      const maxSize = 100 * 1024 * 1024; // 100MB
      if (selectedFile.size > maxSize) {
        toast.error("File is too large. Maximum size is 100MB");
        return;
      }
      
      setFile(selectedFile);
      setUploadSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error("Please select a video file");
      return;
    }

    setUploading(true);

    try {
      // Simulate upload - Replace this with your actual upload logic
      // For now, we'll show a success message after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically:
      // 1. Upload to cloud storage (AWS S3, Firebase Storage, etc.)
      // 2. Send notification to your email or backend
      // 3. Store metadata in a database
      
      setUploadSuccess(true);
      toast.success("Video uploaded successfully! We'll be in touch soon.");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFile(null);
        setUploadSuccess(false);
        setOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload failed. Please try again or email us directly.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300"
        >
          <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Upload Your Video
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Your Video</DialogTitle>
          <DialogDescription>
            Select a video file (max 100MB). We accept MP4, MOV, and other common video formats.
          </DialogDescription>
        </DialogHeader>
        
        {uploadSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <p className="text-lg font-semibold">Upload Successful!</p>
            <p className="text-sm text-muted-foreground text-center">
              We've received your video and will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="video-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {file ? (
                      <>
                        <CheckCircle2 className="w-10 h-10 mb-3 text-primary" />
                        <p className="mb-2 text-sm text-foreground font-semibold">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          MP4, MOV, or other video formats (MAX. 100MB)
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="video-upload"
                    type="file"
                    className="hidden"
                    accept="video/*"
                    onChange={handleFileChange}
                    disabled={uploading}
                  />
                </label>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
              <p className="font-semibold">Tips for best results:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Front-facing camera</li>
                <li>• Good lighting</li>
                <li>• Neutral expression + slight head movement</li>
                <li>• 10-30 seconds is perfect</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={uploading}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!file || uploading}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {uploading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};