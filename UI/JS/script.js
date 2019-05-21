Array.prototype.remove = function(from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

class PostList{

    constructor(posts) {
     this._photoPosts = posts;
    }

   getPhotoPost(id) {
      for (let i = 0; i < this._photoPosts.length; i += 1) {
        if (id + '' === this._photoPosts[i].id) return this._photoPosts[i];
      }
    }



    getPhotoPosts( skip = 0, top = 10, config=PostList._DEFAULT_FILTER_CONFIG) {
      function sorter(obj1, obj2) {
        return new Date(obj1.createdAt).getTime() - new Date(obj2.createdAt).getTime();
      }

      let author = config.author || '',
          hashTag = config.hashTag || '',
          result = [];
      author = author.toLowerCase();
      
      if (!author && !hashTag) {
        return this._photoPosts.slice(skip, top)
                   .sort(sorter);
      }

      for (let i = skip; i < top; i += 1) {
        if (author && !hashTag) {
          if (this._photoPosts[i].author.toLocaleLowerCase() === author) result.push(this._photoPosts[i]);
        } else if (!author && hashTag) {
          if (this._photoPosts[i].hashTags.includes(hashTag)) result.push(this._photoPosts[i]);
        } else {
          if (this._photoPosts[i].hashTags.includes(hashTag) && this._photoPosts[i].author.toLowerCase() === author) result.push(this._photoPosts[i]);
        }
      }

      return result.sort(sorter);
    }



    removePhotoPost(id) {
      for (let i = 0; i < this._photoPosts.length; i += 1) {
        if (this._photoPosts[i].id === id) {
          this._photoPosts.remove(i);
          return true;
        }
      }

      return false;
    }



    editPhotoPost(photoPost) {
      if (!photoPost.hasOwnProperty('id')) return false;

      let i = 0;
      for (; i < this._photoPosts.length; i += 1) {
        if (this._photoPosts[i].id === photoPost.id) break;
      }

      if (i === this._photoPosts.length) return false;
    
      if (photoPost.hasOwnProperty('description')) {
        if (typeof photoPost.description !== 'string') return false;
        this._photoPosts[i].description = photoPost.description;
      }
      if (photoPost.hasOwnProperty('photoLink')) {
        if (typeof photoPost.photoLink !== 'string') return false;
        this._photoPosts[i].photoLink = photoPost.photoLink;
      }
      if (photoPost.hasOwnProperty('hashTags')) {
        if (!Array.isArray(photoPost.hashTags)) return false;
        this._photoPosts[i].hashTags = photoPost.hashTags;
      }
      return true;
    }


    addPhotoPost(post) {
    if (this.validatePhotoPost(post) === true) {
      this._photoPosts.push(post);
      return true;
    }
    return false;
  }



    validatePhotoPost(photoPost) {
      if (!photoPost.hasOwnProperty('description')
        || !photoPost.hasOwnProperty('createdAt')
        || !photoPost.hasOwnProperty('author')
        || !photoPost.hasOwnProperty('photoLink')
        || !photoPost.hasOwnProperty('id')
        || !photoPost.hasOwnProperty('hashTags')
        ) return false;
      
      if (typeof photoPost.description !== 'string'
        || typeof photoPost.author !== 'string'
        || typeof photoPost.photoLink !== 'string'
        
        || typeof photoPost.id !== 'string'
        || !Array.isArray(photoPost.hashTags)
      ) return false;

      return true;
    }


    addAll(posts) {
      const notValid = [];
       
      for (let i = 0; i <posts.length; i += 1) {
        if (this.addPhotoPost(posts[i]) === false){
          notValid.push(posts[i]);
        }
      }
     return notValid;
    }


}
 const posts = [
    {
      id: '1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '4',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '5',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '6',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '7',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '8',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '9',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '10',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '11',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '12',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '13',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '14',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '15',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '16',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '17',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '18',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '19',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '20',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat error quo mollitia architecto incidunt.',
      createdAt: new Date().toLocaleDateString(),
      author: 'Иванов Иван',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    }
  ];


const validPost = {
  id: '24',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  createdAt: new Date('2018-02-23T23:00:00'),
  author: 'sfgdfg',
  photoLink: 'dfgat29',
  hashTags: ['hash'],

};
const notValidPost = {
  id: '2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.',
  createdAt: new Date('2018-02-23T23:00:00'),
  photoLink: 'imbvbvv',
  hashTags: ['hash'],
};

PostList._DEFAULT_FILTER_CONFIG = {
  dateFrom: new Date(-8640000000000000),
  dateTo: new Date(8640000000000000),
  authorName: '',
  hashTags: [],
};

const allAdd = [
  {
    id: '70',
    description: 'zdfzghzdfhdxghxfghfxhjcgfhjcghjjjjjjjjjjjj',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'sfgdfg',
    photoLink: 'dfgat29',
    hashTags: ['ggggg'],
  },
  {
    id: '74',
    description: 'zdfzghzdfhdxghxfghfxhjcgfhjcghjjjjjjjjjjjj',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'sfgdfg',
    photoLink: 'dfgat29',
    hashTags: ['ggggg'],
  },
  {
    id: '4',
    description: 'Lorem4 ipsum dolor sit amet, consecbbbbbbbrttitor sem.  Aliquam erat volutpat.',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'tghjgjg',
    photoLink: 'imgcat4',
    hashTags: ['fgnb'],
  },
];

const validPostEdit = {
  id: '2',
  description: 'cbbfgbfgbm at po',
  photoLink: 'img/cat2',
  hashTags: ['changedHashtag'],
};


  function test() {
   
  const model = new PostList(posts);
  model.addPhotoPost(validPost);
  model.getPhotoPosts(0,10);
  model.removePhotoPost('3');
  model.editPhotoPost(validPostEdit);
  model.addAll(allAdd);


console.log(model);
 
}

test();
