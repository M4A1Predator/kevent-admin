import { Artist } from 'src/app/artists/shared/Artist';
import { EventArtist } from './EventArtist';

export class EventModelArtists {
  public id: Number
  public name: string
  public description: string
  public location: string
  public performTime: string
  public eventArtistList: EventArtist[]
}
