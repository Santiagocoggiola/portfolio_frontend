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
    fpsLimit: 60,
    interactivity: {
      detectsOn: InteractivityDetect.canvas,
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: false,
          mode: HoverMode.repulse,
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
        grab: { distance: 400, lineLinked: { opacity: 1 } },
        push: { particlesNb: 4 },
        remove: { particlesNb: 2 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#81C784' },
      links: {
        color: '#81C784',
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: MoveDirection.none,
        enable: true,
        outMode: OutMode.bounce,
        random: false,
        speed: 8,
        straight: false,
      },
      number: { density: { enable: false, value_area: 800 }, value: 100 }, // Aumentar el valor aquí
      opacity: {
        anim: { enable: true, opacityMin: 0.5, speed: 1, sync: false },
        random: false,
        value: 1,
      },
      shape: {
        character: {
          fill: true,
          font: 'Roboto',
          style: '',
          value: ['0', '1'],
          weight: '400',
        },
        image: {
          height: 100,
          replaceColor: true,
          src: 'images/github.svg',
          width: 100,
        },
        polygon: { nbSides: 5 },
        stroke: { color: '#ffffff', width: 1 },
        type: 'char',
      },
      size: {
        anim: { enable: true, sizeMin: 10, speed: 10, sync: false },
        random: false,
        value: 10,
      },
    },
    polygon: {
      draw: { enable: false, lineColor: '#00b33c', lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: 'none',
      url: '',
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
