export const API_URL = 'http://localhost:3000';
export const IMAGE_SUFFIX = '.webp';
export const IMAGE_SUFFIX_ALTERNATE = '.png';
export const VIDEO_SUFFIX = '.mp4';

export enum Layer {
  Fore = "fore",
  Base = "base",
  Back = "back"
}

export enum ContentType {
  Text = "text",
  Video = "video",
  Image = "image",
  Game = "game",
  Misc = "misc"
}

export interface Content {
  type: ContentType
  value: string
}

export interface Group {
  content: Content[]
}

export interface Chapter {
  id?: number
  name?: string
  link: string
  groups?: Group[]
}