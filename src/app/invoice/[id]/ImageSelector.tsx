import { Add, Close } from "@mui/icons-material";
import { Box, Button, Fab } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

export default function ImageSelector(props: {
  value: Blob | UploadedFile | null;
  onChange: (val: Blob | UploadedFile | null) => void;
  placeholder: string;
  height?: string;
  width?: string;
}) {
  const { value } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      sx={{
        height: props.height,
        width: "max-content",
        border: "solid 0.5px",
        position: "relative",
      }}
    >
      <input
        hidden
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          props.onChange(file as Blob);
        }}
      />

      {value ? (
        <Box>
          <Image
            width={0}
            height={0}
            style={{
              height: props.height,
              width: "auto",
              position: "relative",
              top: 0,
              left: 0,
            }}
            src={value instanceof Blob ? URL.createObjectURL(value) : value.url}
            alt="Image Preview"
          />

          <Fab
            onClick={() => {
              props.onChange(null);
            }}
            size="small"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Close color="error" />
          </Fab>
        </Box>
      ) : (
        <Button
          onClick={() => {
            if (!fileInputRef.current) return;
            fileInputRef.current?.click();
          }}
          sx={{
            height: "100px",
            width: "auto",
            // position: "absolute",
            top: 0,
            left: 0,
          }}
          startIcon={<Add />}
        >
          {props.placeholder}
        </Button>
      )}
    </Box>
  );
}
