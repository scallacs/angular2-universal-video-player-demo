import { Component } from '@angular/core';
import { SampleModule } from 'angular2-universal-player-api';
import { Router, ActivatedRoute, Params} from '@angular/router'; 

import { UniversalPlayerController, YoutubeCmdMapper, VideoInfo} from 'angular2-universal-player-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';

  public playerController = new UniversalPlayerController();
  public playerEvent = new UniversalPlayerController();
  public playerCmd = new YoutubeCmdMapper();

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Route params: ', this.route.params);
    this.route.params.forEach((params: Params) => {
      let id = +params['slug']; // (+) converts string 'id' to a number
      // TODO load video
      if (id != null) {
        this.loadVideo(id);
      }
      else {
        console.error('Invalid params: ' + id);
        // TODO redirect to not found ?
      }
    });
  }

  private loadVideo(id: number) {
    // TODO 
    console.log('Loading video with id:' + id);

    // this.videosTable.view(id)
    //   .subscribe(
    //   video => {
    //     //                        this.video = video;
    //     //let videoInfo = new VideoInfo();
    //     this.playerController.loadVideo(video);
    //     console.log(video);
    //     //                        this.playerCmd.load();
    //   }
    //   );
  }
}
