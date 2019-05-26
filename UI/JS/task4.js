Array.prototype.remove = function(from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

const storage = (function() {
  const data = [
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

  return {
    getPhotoPost: function(id) {
      for (let i = 0; i < data.length; i += 1) {
        if (id + '' === data[i].id) return data[i];
      }
    },

    validatePhotoPost: function(photoPost) {
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
        || typeof photoPost.createdAt !== 'string'
        || typeof photoPost.id !== 'string'
        || !Array.isArray(photoPost.hashTags)
      ) return false;

      return true;
    },

    addPhotoPost: function(photoPost) {
      if (!this.validatePhotoPost(photoPost)) return false;

      data.push(photoPost);

      return true;
    },

    editPhotoPost: function(photoPost) {
      if (!photoPost.hasOwnProperty('id')) return false;

      let i = 0;
      for (; i < data.length; i += 1) {
        if (data[i].id === photoPost.id) break;
      }

      if (i === data.length) return false;
    
      if (photoPost.hasOwnProperty('description')) {
        if (typeof photoPost.description !== 'string') return false;
        data[i].description = photoPost.description;
      }
      if (photoPost.hasOwnProperty('photoLink')) {
        if (typeof photoPost.photoLink !== 'string') return false;
        data[i].photoLink = photoPost.photoLink;
      }
      if (photoPost.hasOwnProperty('hashTags')) {
        if (!Array.isArray(photoPost.hashTags)) return false;
        data[i].hashTags = photoPost.hashTags;
      }

      return true;
    },

    removePhotoPost: function(id) {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].id === id) {
          data.remove(i);
          return true;
        }
      }

      return false;
    },

    getPhotoPosts: function(config, skip = 0, top = 10) {
      function sorter(obj1, obj2) {
        return new Date(obj1.createdAt).getTime() - new Date(obj2.createdAt).getTime();
      }

      let author = config.author || '',
          hashTag = config.hashTag || '',
          result = [];
      author = author.toLowerCase();
      
      if (!author && !hashTag) {
        return data.slice(skip, top)
                   .sort(sorter);
      }

      for (let i = skip; i < top; i += 1) {
        if (author && !hashTag) {
          if (data[i].author.toLocaleLowerCase() === author) result.push(data[i]);
        } else if (!author && hashTag) {
          if (data[i].hashTags.includes(hashTag)) result.push(data[i]);
        } else {
          if (data[i].hashTags.includes(hashTag) && data[i].author.toLowerCase() === author) result.push(data[i]);
        }
      }

      return result.sort(sorter);
    }
  }
})();

console.log(storage.getPhotoPosts({}));
console.log(storage.getPhotoPost('1'));
console.log(storage.removePhotoPost('1'));
console.log(storage.getPhotoPosts({}));
