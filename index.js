const here = {
    id: 'CACnhrjuQmSKQK8OHs6E',
    code: 'HERE-APP-CODE'
 };
 
 const map = L.map('map', {
    center: [47.608013, -122.335167],
    zoom: 13,
    layers: [
       Tangram.leafletLayer({
          scene: 'scene.yaml',
          events: {
             click: onMapClick
          }
       })
    ],
    zoomControl: false
 });
 
 async function onMapClick() {
    //We will write code in here later...
 }
 