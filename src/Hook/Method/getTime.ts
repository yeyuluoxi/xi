import {YGetTime} from "@/Type/THook";

const getTime: YGetTime = (
  time,
  format = "YYYY-MM-DD"
) => time ? time.format(format) : "";

export default getTime;