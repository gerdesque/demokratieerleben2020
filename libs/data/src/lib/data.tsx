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
  Redirect = "redirect",
  Video = "video",
  Image = "image",
  Game = "game",
  SmokingPit = "smokingpit",
  Puzzle = "puzzle",
  Decission = "decission"
}

export interface Content {
  type: string
  layer: string
  value: string
  title?: string
}

export interface GroupProps {
  grouped: boolean
  row: boolean
  info?: string
  background?: string
  character?: string
  content: Content[]
}

export interface ChapterProps {
  id?: number
  name?: string
  link: string
  groups?: GroupProps[]
}