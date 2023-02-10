class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkedOutStatus) {
    this._isCheckedOut = checkedOutStatus;
  }

  getAverageRating() {
    let sum = this._ratings.reduce((acc, i) => acc + i, 0);
    let averageRating = sum / this._ratings.length;
    return averageRating.toFixed(2);
  }

  toggleCheckedOutStatus() {
    if (this._isCheckedOut) {
      return false;
    } else {
      return true;
    }
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    function shuffleArray(songs) {
      // Start from the last element and swap
      // one by one. We don't need to run for
      // the first element that's why i > 0
      for (let i = songs.length - 1; i > 0; i--) {
        // pick a random index from 0 to i inclusive
        const j = Math.floor(Math.random() * (i + 1)); // at random index

        // Swap arr[i] with the element
        [songs[i], songs[j]] = [songs[j], songs[i]];
      }
      return songs;
    }
    return shuffleArray(this._songs);
  }
}

const playlist = new CD("Kendrick Lamar", "DAMN", [
  "Hustle",
  "Poetic Justice",
  "Backseat Freestyle",
  "Alright",
  "LOYALTY",
]);

console.log(playlist)
playlist.toggleCheckedOutStatus();
console.log(playlist.shuffle());
playlist.addRating(1.4);
playlist.addRating(4.8);
playlist.addRating(3.2);
console.log(playlist.getAverageRating());
