import type { url } from "inspector";
import workspace_svg from "./workspace_background.svg";
import test_img from "./test_image.jpg"

const background_style = {
  backgroundImage: `url(${workspace_svg})`,
  height: '100vh',
  width: '100vw',
  display: 'inline-block',
  backgroundRepeat: 'repeat'
}
export function Index() {
  return (
    <main>
      <nav>
      </nav>
      <div id='web_container' >
        <span id='background' style={background_style}></span>
      </div>
    </main>
  );
}


if (typeof window !== 'undefined') {
  const background_el = document.getElementById('background');
  const web_container_el = document.getElementById('web_container');


  let startX = 0;
  let startY = 0;
  let moveX = 0;
  let moveY = 0;
  let mouseIsDown = false

  const projects = [
    {
      'preview': './test_image.jpg',
      'name': 'Awesome Name',
      'description': 'Something very interesting'
    }, {
      'preview': './test_image.jpg',
      'name': 'Awesome Name',
      'description': 'Something very interesting'
    }, {
      'preview': './test_image.jpg',
      'name': 'Awesome Name',
      'description': 'Something very interesting'
    }, {
      'preview': './test_image.jpg',
      'name': 'Awesome Name',
      'description': 'Something very interesting'
    }, {
      'preview': './test_image.jpg',
      'name': 'Awesome Name',
      'description': 'Something very interesting'
    }]
  let seed = placement_seed()
  web_container_el!.addEventListener('mousedown', (event) => {
    mouseIsDown = true
    startX = event.clientX + moveX;
    startY = event.clientY + moveY;
  });
  web_container_el!.addEventListener('mouseup', () => {
    mouseIsDown = false
  });

  web_container_el!.addEventListener('mousemove', (event) => {
    if (mouseIsDown) {

      moveX = (startX - event.clientX);
      moveY = (startY - event.clientY);
      project_placement(moveX, moveY)

      background_el!.style.backgroundPositionX = -moveX + 'px';
      background_el!.style.backgroundPositionY = -moveY + 'px';

    }
  });

  function project_placement(offset_x: number, offset_y: number) {
    background_el!.innerHTML = ""

    const dist = 50
    const win_width = background_el!.getBoundingClientRect().width
    const win_height = background_el!.getBoundingClientRect().height

    let previousX = win_width / 2
    let previousY = win_height / 2

    for (let i in projects) {

      let proj_el = document.createElement('div');
      proj_el.className = 'proj_container'
      let img_el = document.createElement('img');
      let description_el = document.createElement('p');
      let name_el = document.createElement('h1');
      description_el.innerText = projects[i]['description']
      name_el.innerText = projects[i]['name']

      img_el.src = test_img;
      proj_el.appendChild(name_el);
      proj_el.appendChild(img_el);
      proj_el.appendChild(description_el);

      let int_i = Number(i)

      previousX = previousX + seed[0][i] * (Math.round(seed[0][i]) * 2 - 1)
      previousY = previousY + seed[1][i] * (Math.round(seed[1][i]) * 2 - 1)

      proj_el.style.top = seed[0][i] - offset_y + 'px'
      proj_el.style.left = seed[1][i] - offset_x + 'px'

      background_el!.appendChild(proj_el)
    }
  }

  function placement_seed() {
    let xList: number[] = [];
    let yList: number[] = [];

    const areaWidth = window.innerWidth;
    const areaHeight = window.innerHeight;

    const gridWidth = window.innerWidth * 1.6;
    const gridHeight = window.innerHeight * 1.6;

    const offsetX = (areaWidth - gridWidth) / 2;
    const offsetY = (areaHeight - gridHeight) / 2;

    const cols = 3;
    const rows = Math.ceil(projects.length / cols);

    let index = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (index >= projects.length) break;

        let baseX = offsetX + c * (gridWidth / cols) + (gridWidth / cols) / 2;
        let baseY = offsetY + r * (gridHeight / rows) + (gridHeight / rows) / 2;

        let jitterX = (Math.random() - 0.5) * ((gridWidth / cols) / 3);
        let jitterY = (Math.random() - 0.5) * ((gridHeight / rows) / 3);

        xList.push(Math.floor(baseX + jitterX));
        yList.push(Math.floor(baseY + jitterY));

        index++;
      }
    }

    return [xList, yList];
  }

  project_placement(0, 0)

};


