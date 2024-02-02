import { prisma } from "@/lib/db";
import SettingForm from "./SettingForm";
import { saveUploadedFile } from "@/lib/saveFile";
import { existsSync, unlink, unlinkSync } from "fs";

export default async function SettingsPage() {
  const setting: Setting = (await prisma.setting.findFirst({
    include: {
      logo: true,
    },
  })) || {
    logo: null,
    email: "",
    website: "",
    city: "",
    company_name: "",
    country_code: "",
    postal: "",
    state: "",
    street_1: "",
    street_2: "",
  };

  // Tranform file path to file url

  setting.logo = setting.logo
    ? ({
        ...setting.logo,
        url:
          "http://localhost:3000/api/file?name=" +
          (setting.logo as UploadedFile).path,
      } as UploadedFile)
    : null;

  // Server Action
  async function saveData(fd: FormData): Promise<any> {
    "use server";


    const fileId = fd.get("logo")
      ? await saveUploadedFile(fd.get("logo") as File)
      : (setting.logo as UploadedFile).id;
    // delete existing file

    if ((setting.logo as UploadedFile).path) {
      if (
        existsSync(
          process.env.invoice_file_path + (setting.logo as UploadedFile).path
        )
      ) {
        unlinkSync(
          process.env.invoice_file_path + (setting.logo as UploadedFile).path
        );
      }
    }

    const data = {
      ...fd,
      uploadedFileId: fileId,
    };

    fd.delete("logo");
    fd.delete("id");
    fd.delete("userId");
    const r = Object.fromEntries(fd);

    return prisma.setting.update({
      where: {
        id: 1,
      },
      data: {
        ...r,
        uploadedFileId: fileId,
      },
    });
  }
  return <SettingForm setting={setting} saveData={saveData} />;
}
