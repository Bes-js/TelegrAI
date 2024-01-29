import { Hercai, QuestionData, DrawImageData } from "hercai";
import config from "../config/settings";
const herc = new Hercai(config.hercaiApiKey);

export default herc;
export type { QuestionData, DrawImageData };
