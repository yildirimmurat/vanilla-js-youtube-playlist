const videoIds = [
    'atjnfKoxepo',
    'afJgFXjfHRg',
    'NZG8_hcSB-w',
    'jod5ntDlBxo',
    'dkxHeVsyyTg',
    'OKAJ70U4enA',
    'vL-kYH0uBK4',
    'y79VkI8KC9U',
    'zW9DTxnAAvI',
    'YPNtnURWpRs',
    'D0a9SE0nNaU',
    'EkBr5v1I6yg',
    'yaC0cn-swlQ',
    'Js5VqownBEg',
    'Cke3fj8EEEs',
    '8UCa5k0dUuo',
    'aeXiQ4P3vEc',
    'PqFOisgxuSc',
    'Qy4ed9-bGO4',
    'R09ve2jz_9k',
    'owjo4uZg3As',
    'OgTMC-fQUZk',
    'x7bph7UFO8U',
    '3455dT1GXJc',
    'UwsAnjJRoeI',
    'YaYJEBFwbe4',
    'N_66mExJT3k',
    '4sXI8uXsLjI',
    'EPqOIciezls',
    'QXvt0cl_a_Q',
    'hxhXMoVLG5M'
];
const sideBarEl = document.querySelector('.col-md-3 .list-group');
videoIds.forEach((videoId, index) => {
    sideBarEl.insertAdjacentHTML('beforeend', `<li class="list-group-item"><a href="#" class="sidebar-link" data-video-id="${videoId}">Video ${index + 1}</a></li>`)
})

window.addEventListener('load', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const mainContent = document.querySelector('.col-md-9');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const videoId = link.getAttribute('data-video-id');
          mainContent.innerHTML = `
            <div class="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center" style="height: 100%; width: 100%">
              <iframe width="900" height="600"class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            </div>
          `;
        });
    });
});

