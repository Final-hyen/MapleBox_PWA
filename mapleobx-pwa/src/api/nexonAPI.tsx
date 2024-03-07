//NEXON OpenAPI
import axios from "axios";
interface Ocid {
  ocid: string;
}

export async function getOcid(nickname: string) {
    try {
      const res = await axios.get<Ocid>(
        'https://open.api.nexon.com/maplestory/v1/id', 
        { 
          params: { character_name: nickname }, 
          headers: { 
            "x-nxopen-api-key": "test_c01ef821dcec1e7253351260a8f3a6f4d671b40b3971b399bb2b8302cee5b3c69f471f45aec7b0b56254304f6850106c"
          } 
        }
      );
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
