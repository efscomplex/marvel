import { defaultIfEmpty } from "rxjs/operators"

export function toCharacter(item){
   return {
      id: item.id,
      name: item.name,
      description: item.description,
      comics: item.comics.items,
      series: item.series.items,
      events: item.events.items,
      thumbnail:item.thumbnail.path+'/portrait_xlarge.' + item.thumbnail.extension,
   }
}
export function toComic(item){
   return {
      id: item.id,
      title: item.title,
      description: item.description,
      creators: item.creators.items,
      characters: item.characters.items,
      urls: item.urls.items,
      thumbnail:item.thumbnail.path+'/portrait_xlarge.' + item.thumbnail.extension,
      images:item.images.items
   }
}

export function toCreator(item){
   return {
      id: item.id,
      name: `${item.firstName} ${item.middleName} ${item.lastName}`,
      thumbnail:item.thumbnail.path+'/portrait_xlarge.' + item.thumbnail.extension,
   }
}

export function toSerie(item){
   return {
      id: item.id,
      title: item.title,
      description: item.description,
      thumbnail:item.thumbnail.path+'/portrait_xlarge.' + item.thumbnail.extension,
   }
}
export function toEvent(item){
   return {
      id: item.id,
      title: item.title,
      description: item.description,
   }
}
export function toStory(item){
   return {
      id: item.id,
      title: item.title,
      description: item.description,
      thumbnail:item.thumbnail.path+'/portrait_xlarge.' + item.thumbnail.extension,
   }
}
export default {
   serie: toSerie,
   creator: toCreator,
   comic: toComic,
   character: toCharacter,
   event: toEvent,
   storie: toStory
}