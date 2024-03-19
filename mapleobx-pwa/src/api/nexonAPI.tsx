//NEXON OpenAPI
import axios from "axios";

const API_URL: string = "https://open.api.nexon.com";
const API_KEY: string = "test_c01ef821dcec1e7253351260a8f3a6f4d671b40b3971b399bb2b8302cee5b3c69f471f45aec7b0b56254304f6850106c";
const ocid: string| null = localStorage.getItem('ocid');
const date: string| null = localStorage.getItem('date');

interface Ocid {
  ocid: string;
}

export async function getOcid(nickname: string) {
  try {
    const res = await axios.get<Ocid>(
      `${API_URL}/maplestory/v1/id`,
      {
        params: { character_name: nickname },
        headers: {
          "x-nxopen-api-key":
            `${API_KEY}`,
        },
      }
    );
    const data = res.data;
    localStorage.setItem("ocid", data.ocid);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBasicInfo(): Promise<Object> {
  try {
    const res = await axios.get(
      `${API_URL}/maplestory/v1/character/basic`,
      {
        params: {
          ocid: ocid,
          date: date,
        },
        headers: {
          "x-nxopen-api-key":
            `${API_KEY}`,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getStatInfo<T>(){
  try {
    const res = await axios.get(
      `${API_URL}/maplestory/v1/character/stat`,
      {
        params: {
          ocid: ocid,
          date: date,
        },
        headers: {
          "x-nxopen-api-key": `${API_KEY}`
        }
      }
    );
    const data = res.data;
    return data;
  }catch (error){
    console.log(error);
    throw error;
  }
}

export async function getUnion<T>(){
  try {
    const res = await axios.get(
      `${API_URL}/maplestory/v1/user/union`,
      {
        params: {
          ocid: ocid,
          date: date,
        },
        headers: {
          "x-nxopen-api-key": `${API_KEY}`
        }
      }
    );
    const data = res.data;
    return data;
  }catch (error){
    console.log(error);
    throw error;
  }
}