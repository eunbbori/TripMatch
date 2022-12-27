import request from "request";
import "dotenv/config";

export default function getFestivals(eventStartDate: string): Promise<[]> {
  return new Promise((res, rej) => {
    request(
      {
        uri: `http://apis.data.go.kr/B551011/KorService/searchFestival?numOfRows=20&MobileOS=ETC&MobileApp=AppTest&serviceKey=${process.env.SERVICE_KEY}&_type=json&arrange=C&eventStartDate=${eventStartDate}`,
        method: "GET",
        json: true,
      },
      (error: any, response: request.Response) => {
        if (error) rej(error);
        else
          res(
            response.body.response.body.items.item.map(
              ({
                addr1,
                eventstartdate,
                eventenddate,
                firstimage,
                tel,
                title,
              }: {
                addr1: string;
                eventstartdate: string;
                eventenddate: string;
                firstimage: string;
                tel: string;
                title: string;
              }) => ({
                addr1,
                eventstartdate,
                eventenddate,
                firstimage,
                tel,
                title,
              })
            )
          );
      }
    );
  });
}
