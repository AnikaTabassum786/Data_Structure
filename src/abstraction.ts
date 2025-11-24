/*
 1.interface
 2.abstract class
*/


//idea

interface MediaPlayer{
    play(): void;
    pause(): void;
    stop(): void;
}

//implementation

class Musicplayer implements MediaPlayer{

 play(){
    console.log('Music Play...')
 }

 pause(){
   console.log('Music Play...')  
 }

 stop(){
     console.log('Music Stop...') 
 }

}

const musicPlayer1 = new Musicplayer() //musicPlayer1 is an instance

musicPlayer1.play()
musicPlayer1.pause()
musicPlayer1.stop()

console.log('---------------------') 

abstract class MediaPlay{
   abstract playMusic(): void;
   abstract pauseMusic(): void;
   abstract stopMusic(): void;
}

class MyMusic extends MediaPlay{
    playMusic(){
        console.log('Anika Play Music')
    }
    pauseMusic(){
        console.log('Anika Pause Music')
    }
    stopMusic(){
        console.log('Anika Stop Music')
    }
}

const myMusic = new MyMusic() //myMusic instance of MyMusic which is child class of MediaPlay
myMusic.playMusic();
myMusic.pauseMusic();
myMusic.stopMusic()