import { randomUUID } from "crypto";
import { prisma } from "./db";
import { extname } from "path";
import { writeFile } from "fs/promises";
// import { prisma } from "./db";

export async function saveUploadedFile(file: File): Promise<number> {
  const uuid = randomUUID();
  const filename = uuid + extname(file.name);

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(process.env.invoice_file_path + filename, buffer);

  //   Save t
  const savedFile = await prisma.uploadedFile.create({
    data: {
      path: filename,
    },
  });

  return savedFile.id;
}
