import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  // provide array
  listOfPosts: Post[] = [
    // new Post(
    //   'Danube Delta',
    //   'The Danube Delta is the second largest river delta in Europe, after the Volga Delta, and is the best preserved on the continent. The area is considered a nature lovers paradise that remains largely unexplored by travelers outside the area. Located in eastern Romania, the UNESCO World Heritage Site is where the Danube River and the Black Sea meet.',
    //   'https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/danube-delta-pelicans-AdobeStock-small.jpeg',
    //   'traveller@yahoo.com',
    //   new Date(),
    //   10
    // ),

    // new Post(
    //   'Petra',
    //   "Inhabited since prehistoric times, this Nabataean caravan-city, situated between the Red Sea and the Dead Sea, was an important crossroads between Arabia, Egypt and Syria-Phoenicia. Petra is half-built, half-carved into the rock, and is surrounded by mountains riddled with passages and gorges. It is one of the world's most famous archaeological sites, where ancient Eastern traditions blend with Hellenistic architecture.",
    //   'https://www.twowanderingsoles.com/wp-content/uploads/2022/09/IMG_3324-1024x683.jpg',
    //   'test@test.com',
    //   new Date(),
    //   20
    // ),

    // new Post(
    //   'Giza',
    //   'Giza is an Egyptian city on the west bank of the Nile, near Cairo. The Giza Plateau is home to iconic Egyptian monuments, including 3 tall pyramids built as royal mausoleums around the 26th century B.C. The largest, the Great Pyramid, is King Khufu’s tomb. The Great Sphinx is a vast sculpture of a man’s head on a lion’s body. The Solar Boat Museum displays a restored cedar barge found buried near the Great Pyramid.',
    //   'https://blog.wego.com/wp-content/uploads/shutterstock_1443302708_fi7flo.jpg',
    //   'magicOfEgypt@yahoo.com',
    //   new Date(),
    //   15
    // ),

    // new Post(
    //   'Luxor',
    //   "Luxor is a city on the east bank of the Nile River in southern Egypt. It is on the site of ancient Thebes, the pharaohs\\’ capital at the height of their power, during the 16th\\–11th centuries B.C. Today's city surrounds 2 huge, surviving ancient monuments: graceful Luxor Temple and Karnak Temple, a mile north. The royal tombs of the Valley of the Kings and the Valley of the Queens are on the river\\’s west bank.",
    //   'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/45/3a/0f.jpg',
    //   'magicOfEgypt@yahoo.com',
    //   new Date(),
    //   30
    // ),

    // new Post(
    //   'Carrières de Lumiéres',
    //   'Former quarry with art-based multimedia shows, projecting images of famous paintings set to music.',
    //   'https://www.carrieres-lumieres.com/sites/cdl/files/styles/mav_frise/public/vangogh2019.jpg?itok=xXkxwnQC',
    //   'visitProvence@gmail.com',
    //   new Date(),
    //   100
    // ),
    // new Post(
    //   'Pamukkale',
    //   'Pamukkale is a town in western Turkey known for the mineral-rich thermal waters flowing down white travertine terraces on a nearby hillside. It neighbors Hierapolis, an ancient Roman spa city founded around 190 B.C. Ruins there include a well-preserved theater and a necropolis with sarcophagi that stretch for 2km. The Antique Pool is famous for its submerged Roman columns, the result of an earthquake.',
    //   'https://www.globeholidays.net/Asia/Turkey/Aegean_Region/Media/Turkey_Pamukkale_Site_1.jpg',
    //   'turkishairline@yahoo.com',
    //   new Date(),
    //   150
    // ),
  ];

  // facilities
  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  getPost(index: number){
    return this.listOfPosts[index];
  }

  likePost(index: number){
    this.listOfPosts[index].numberOfLikes++;
  }

  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
