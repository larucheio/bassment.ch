const audio = document.getElementById('audio')

function run(link, player) {
  player.setAttribute('src', link.getAttribute('href'))
  audio.load()
  audio.play()
}

function initPlayer(playlist) {
  const p = document.getElementById('playlist')

  for (let i = 0; i < playlist.length; i++) {
    const track = document.createElement('li')
    const a = document.createElement('a')
    const linkText = document.createTextNode(playlist[i].title)
    a.appendChild(linkText)
    a.setAttribute('href', playlist[i].url)
    track.appendChild(a)

    track.addEventListener('click', (e) => {
      e.preventDefault()
      run(a, audio)
    })

    p.appendChild(track)
  }
}

const playlist = [
  {
    title: '2016.04.21',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2016.04.21.mp3',
  },
  {
    title: '2016.03.31',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2016.03.31.mp3',
  },
  {
    title: '2016.03.17',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2016.03.17.mp3',
  },
  {
    title: '2016.02.04',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2016.02.04.mp3',
  },
  {
    title: '2016.01.21',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2016.01.21.mp3',
  },
  {
    title: '2015.04.16',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2015.04.16.mp3',
  },
  {
    title: '2015.04.02',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2015.04.02.mp3',
  },
  {
    title: '2015.02.05',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2015.02.05.mp3',
  },
  {
    title: '2015.01.15',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2015.01.15.mp3',
  },
  {
    title: '2014.12.29',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.12.29.mp3',
  },
  {
    title: '2014.12.18',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.12.18.mp3',
  },
  {
    title: '2014.11.20',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.11.20.mp3',
  },
  {
    title: '2014.11.06',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.11.06.mp3',
  },
  {
    title: '2014.10.16',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.10.16.mp3',
  },
  {
    title: '2014.10.02',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.10.02.mp3',
  },
  {
    title: '2014.09.18',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.09.18.mp3',
  },
  {
    title: '2014.07.17',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.07.17.mp3',
  },
  {
    title: '2014.05.29',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.05.29.mp3',
  },
  {
    title: '2014.05.15',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.05.15.mp3',
  },
  {
    title: '2014.04.17',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.04.17.mp3',
  },
  {
    title: '2014.04.03',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.04.03.mp3',
  },
  {
    title: '2014.03.20',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.03.20.mp3',
  },
  {
    title: '2014.03.06',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.03.06.mp3',
  },
  {
    title: '2014.02.20',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.02.20.mp3',
  },
  {
    title: '2014.02.06',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.02.06.mp3',
  },
  {
    title: '2014.01.30',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.01.30.mp3',
  },
  {
    title: '2014.01.16',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.01.16.mp3',
  },
  {
    title: '2014.01.02',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2014.01.02.mp3',
  },
  {
    title: '2013.12.19',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.12.19.mp3',
  },
  {
    title: '2013.12.05',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.12.05.mp3',
  },
  {
    title: '2013.11.07',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.11.07.mp3',
  },
  {
    title: '2013.10.31',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.10.31.mp3',
  },
  {
    title: '2013.05.30',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.05.30.mp3',
  },
  {
    title: '2013.04.04',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.04.04.mp3',
  },
  {
    title: '2013.03.21',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.03.21.mp3',
  },
  {
    title: '2013.03.07',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.03.07.mp3',
  },
  {
    title: '2013.02.21',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.02.21.mp3',
  },
  {
    title: '2013.02.07',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.02.07.mp3',
  },
  {
    title: '2013.01.31',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2013.01.31.mp3',
  },
  {
    title: '2012.11.01',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2012.11.01.mp3',
  },
  {
    title: '2012.10.18',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2012.10.18.mp3',
  },
  {
    title: '2012.10.04',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2012.10.04.mp3',
  },
  {
    title: '2012.09.20',
    url: 'https://s3-eu-west-1.amazonaws.com/static.bassment.ch/bassment-station/2012.09.20.mp3',
  },
]

initPlayer(playlist)
