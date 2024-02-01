import { prisma } from "@/lib/db";
import SettingForm from "./SettingForm";

export default async function SettingsPage() {
  const setting: Setting = (await prisma.setting.findFirst()) || {
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

  // Server Action
  async function saveData(values: Setting): Promise<any> {
    "use server";

    console.log("Saving...", values);
    return prisma.setting.update({
      where: {
        id: 1,
      },
      data: {
        ...values,
        uploadedFileId: 1,
      },
    });
  }
  return <SettingForm setting={setting} saveData={saveData} />;
}
