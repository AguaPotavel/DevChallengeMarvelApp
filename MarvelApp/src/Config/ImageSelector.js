import React from 'react';

const ImageSelector = (name) => {
    var image
    if (name == 'Homem Aranha'){
        image = require('../Assets/chars/spider-man.png')
    }
    if (name == 'Pantera Negra'){
        image = require('../Assets/chars/black-panther.png')
    }
    if (name == 'Homem de Ferro'){
        image = require('../Assets/chars/iron-man.png')
    }
    if (name == 'Caveira Vermelha'){
        image = require('../Assets/chars/red-skull.png')
    }
    if (name == 'Doutor Destino'){
        image = require('../Assets/chars/dr-doom.png')
    }
    if (name == 'Duende Verde'){
        image = require('../Assets/chars/green-goblin.png')
    }
    if (name == 'Deadpool'){
        image = require('../Assets/chars/deadpool.png')
    }
    if (name == 'Venom'){
        image = require('../Assets/chars/venom.png')
    }
    if (name == 'Justiceiro'){
        image = require('../Assets/chars/punisher.png')
    }
    if (name == 'Thanos'){
        image = require('../Assets/chars/thanos.png')
    }
    if (name == 'Ronan'){
        image = require('../Assets/chars/ronan.png')
    }
    if (name == 'Talos'){
        image = require('../Assets/chars/talos.png')
    }
    if (name == 'Howard Stark'){
        image = require('../Assets/chars/howard-stark.png')
    }
    if (name == 'Mary Jane'){
        image = require('../Assets/chars/mary-jane.png')
    }
    if (name == 'Happy Hogan'){
        image = require('../Assets/chars/happy-hogan.png')
    }
  return (image);
};

export default ImageSelector;