import { prisma } from "@/lib/db";
import SettingForm from "./SettingForm";

export default async function SettingsPage() {
  const setting: Setting = (await prisma.setting.findFirst()) || {
    logo: null,
    email: "",
    website: "",
    city: "",
    company_name: "Sures CO. LTD",
    country_code: "",
    postal: "",
    state: "",
    street_1: "",
    street_2: "",
  };

  console.log(setting);

  // return <Typography>{setting}</Typography>;
  return <SettingForm setting={setting} />;
}
