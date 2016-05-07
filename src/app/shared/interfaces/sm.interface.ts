import {SmChart} from './';

export interface Sm {
  title: string,
  subtitle: string,
  artist: string,
  titletranslit: string,
  subtitletranslit: string,
  artisttranslit: string,
  genre: string,
  credit: string,
  banner: any,
  background: any,
  lyricspath: any,
  cdtitle: string,
  music: any,
  offset: number,
  samplestart: number,
  samplelength: number,
  selectable: boolean,
  bpms: Array<{measure: number, value: number}>,
  stops: Array<{measure: number, value: number}>,
  bgchanges: any,
  attacks: any,
  notedata: Array<SmChart>
}