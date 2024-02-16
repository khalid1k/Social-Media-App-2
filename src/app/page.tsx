import Sigin from "./signUp/page";
import { ConnectDb } from "@/dbConfig/dbConfig";
export default async function Home() {
    await ConnectDb();
    return <Sigin />;
}
