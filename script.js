document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('video-select');
  const iframeElement = document.querySelector('.grid-item1 iframe');
  const hostsElement = document.getElementById('hostnames');
  const mainHeaderElement = document.querySelector('.grid-item3 .mainheader');
  const descriptionParagraphElement = document.querySelector('.grid-item3 p');

  // Event listener for when a new episode is selected
  selectElement.addEventListener('change', function() {
    console.log('Episode selection changed'); // Debugging statement

    // Get the value of the selected option
    const selectedEpisode = selectElement.value;
    console.log('Selected episode:', selectedEpisode); // Debugging statement

    // Define video embed URLs, hosts, and descriptions for each episode
    const episodeDetails = {
      episode0: {
        url: 'https://www.youtube.com/embed/RqRgnBDtyEA?si=lBrZvb6MbopQjMiE',
        hosts: 'Mohammed Ismail, Rasty Sherwany',
        mainHeader: 'An introduction to #The21Podcast',
        description: 'Join us for the debut episode of #The21Podcast, where we delve into the fascinating intersection of technology and life. Prepare for insightful discussions and engaging conversations as we explore the intricacies of the modern world. Tune in and embark on this enlightening journey with us.'
      },
      episode1: {
        url: 'https://www.youtube.com/embed/VIDEO_ID_1',
        hosts: 'Host 1, Host 2',
        mainHeader: 'Main Header for Episode 1',
        description: 'Description for Episode 1 goes here...'
      },
      episode2: {
        url: 'https://www.youtube.com/embed/VIDEO_ID_2',
        hosts: 'Host A, Host B',
        mainHeader: 'Main Header for Episode 2',
        description: 'Description for Episode 2 goes here...'
      },
      // Add more episode details for each episode
    };

    // Update the src attribute of the iframe with the embed URL for the selected episode
    iframeElement.src = episodeDetails[selectedEpisode].url;
    console.log('Video URL:', iframeElement.src); // Debugging statement

    // Update the text for hosts in this episode
    hostsElement.textContent = 'Hosts in this episode: ' + episodeDetails[selectedEpisode].hosts;

    // Update the main header for the selected episode
    mainHeaderElement.textContent = episodeDetails[selectedEpisode].mainHeader;

    // Update the description for the selected episode
    descriptionParagraphElement.textContent = episodeDetails[selectedEpisode].description;
  });
});
