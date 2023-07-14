import { Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
  InteractivityDetect,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-particle-background',
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.css']
})
export class ParticleBackgroundComponent {
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: "#000000",
    },
    fpsLimit: 120,
    fullScreen: {
      zIndex: -1,
    },
    particles: {
      color: {
        value: this.generateRandomColor(), // Genera un color aleatorio de la paleta
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: false,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000,
          },
        },
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
          bottom: OutMode.bounce,
          left: OutMode.bounce,
          right: OutMode.bounce,
          top: OutMode.bounce,
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0,
          },
          generator: "polygon",
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30,
          },
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: "#000000",
          length: 10,
          enable: true,
          delay: 0.1, // Controla la velocidad de desvanecimiento de la estela
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    },
    emitters: {
      direction: MoveDirection.none,
      rate: {
        quantity: 1,
        delay: 0.25,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    width: '100%',
    height: '100%',
    collisions: {
      enable: true,
      bounce: {
        horizontal: true,
        vertical: true,
      },
    },
    detectRetina: true,
  };
  
  
  generateRandomColor() {
    // Genera valores aleatorios para los componentes RGB dentro del rango de tonos de celeste
    const red = this.getRandomValue(180, 230);
    const green = this.getRandomValue(200, 240);
    const blue = this.getRandomValue(220, 255);
  
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
