const postsList = new PostList(posts);

class View{

	constructor(){
		this.storage = postsList;
		this._user = "";
	}

	setUser(user){
		this._user = user;

		if(user){
			const username = document.getElementById('username');
			username.innerHTML = user;
			document.getElementsByClassName('exit_button')[0].style.display = 'inline-block';
			document.getElementsByClassName('add_button')[0].style.display = 'inline-block';
			document.getElementsByClassName('add_filter_button')[0].style.display = 'inline-block';

			this.updatePage();
		}
		else{
			const username = document.getElementById('username');
			username.innerHTML = "Guest";
			document.getElementsByClassName('exit_button')[0].style.display = 'none';
			document.getElementsByClassName('add_button')[0].style.display = 'none';
			document.getElementsByClassName('add_filter_button')[0].style.display = 'none';

			this.updatePage();	
		}
	}

	removePhotoPost(id){
			if(this.storage.removePhotoPost(id)){
				const wall = document.getElementById('wall');
				const el = document.getElementById(id);
				wall.removeChild(el);
				return true;
			}
			return false;
	}
	editPhotoPost(post){
		if (this.storage.editPhotoPost(post)){
			const el = document.getElementById(post.id);
			el.innerHTML = this.createPostComponent(this.storage.getPhotoPost(post.id));
		}
	}

	createPostComponent(post){
		let tags = '';
		for(let i =0; i<post.hashTags.length; i += 1){
			tags += `<li>${post.hashTags[i]}</li>`
		}
		let postComp = `<div class = "post"><div class = "post_header">
						<h5 class ="post_author">${post.author}</h5>
						<div class="post_date">${post.createdAt}</div>
					</div>
					<div class = "post_content">
						<div class="post_left_block">
							<p class="post_description">${post.description} </p>
							<ul class="post_hashtags">
								${tags}
							</ul>
							
						</div>
						<div class="post_right_block">
							<img src=${post.photoLink} alt="PostPhoto">
						</div>
						<div class="post_actions">
								<button class="like_button" type="button">
									<i class="far fa-heart"></i>
								</button>
								<span class="like_button_count"></span>
								<button class="delete_button" type = "button">
									<i class="far fa-trash-alt"></i>
								</button>
								<button class="edit_button" type="button">
									<i class="far fa-edit"></i>
								</button>
						</div>
					</div>
				</div></div>`;


			let p = document.getElementById(post.id);
			if (p !== null){

				let eb = p.getElementsByClassName('edit_button')[0];
				let db = p.getElementsByClassName('delete_button')[0];
		    
				if(post.author === this._user){
					eb.style.display = 'inline-block';
					db.style.display = 'inline-block';
				}
				else{
					eb.style.display = 'none';
					db.style.display = 'none';
				}
		}
		return postComp;

	}

	pushPost(post){
		const wall = document.getElementById('wall');
		const wallPost = document.createElement('post');
		wallPost.id = post.id;
		wallPost.innerHTML = this.createPostComponent(post);
		wall.appendChild(wallPost);
	}

	updatePage(){
		this.page = this.storage.getPhotoPosts();
		this.page.forEach((element) => { this.pushPost(element) });
	}

}

let v = new View();
v.updatePage();
