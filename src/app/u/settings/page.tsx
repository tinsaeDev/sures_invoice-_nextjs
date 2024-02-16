import { prisma } from "@/lib/db";
import SettingForm from "./SettingForm";
import { saveUploadedFile } from "@/lib/saveFile";
import { existsSync, unlink, unlinkSync } from "fs";
import getUser from "@/lib/user";
import { Setting } from "@prisma/client";

export default async function SettingsPage() {
  const user = getUser();
  const setting: Setting = await prisma.setting.findFirst({
    where: {
      userId: user.id,
    },
  });

  return <SettingForm setting={setting} />;
}
