$.getJSON('https://varadalwi.github.io/wisdmlabs/data.json', function(data) {
      //console.log(data.posts.length);

      $.each(data.slider, function(i, slider){
        if(i == 0){
          $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="`+ i +`" class="active" aria-current="true"></button>`);

          $('.carousel-inner').append(`<div class="carousel-item active">
                                        <img class="d-block w-100" src="`+ slider.img +`" alt="`+ slider.title +`">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>`+ slider.title +`</h5>
                                            <p>`+ slider.desc +`</p>
                                        </div>
                                      </div>`);
        }
        else{
          $('.carousel-indicators').append(`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="`+ i +`"></button>`);

          $('.carousel-inner').append(`<div class="carousel-item">
                                        <img class="d-block w-100" src="`+ slider.img +`" alt="`+ slider.title +`">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>`+ slider.title +`</h5>
                                            <p>`+ slider.desc +`</p>
                                        </div>
                                      </div>`);
        }

      });

      $.each(data.posts, function(i, posts){
        $('#posts').append(`<div class="col-lg-6 mb-3">
                              <div class="card">
                                <div class="card-header">
                                  <img src="`+ posts.img +`">
                                </div>
                                <div class="card-body">
                                  <h5>`+ posts.title +`</h5>
                                  <p>`+ posts.desc +`</p>
                                </div>
                                <div class="card-footer">
                                  <ul class="list-group">
                                    <li class="list-item">`+ posts.category +`</li>
                                    <li class="list-item">`+ posts.datetime +`</li>
                                    <li class="list-item">`+ posts.author +`</li>
                                    <li class="list-item">`+ posts.comment_count +`</li>
                                    <li class="list-item">`+ posts.is_featured +`</li>
                                  </ul>
                                </div>
                              </div>
                            </div>`);
      });

      $.each(data.grid, function(i, grid){
        $('#grid').append(`<div class="col-lg-6 mb-3">
                              <div class="card">
                                <div class="card-header d-flex">
                                  <img src="`+ grid.smallimg +`" width="15%">
                                  <h5 class="ml-3">`+ grid.title +`</h5>
                                </div>
                                <div class="card-body">
                                  <img src="`+ grid.largeimg +`">
                                </div>
                              </div>
                            </div>`);
      });

    });