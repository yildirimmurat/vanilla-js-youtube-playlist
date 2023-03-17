const videoIds = [
    'bN2VaN3X7m4',
    'gpSnCUATFts',
    'JQbb1hX8kGQ',
    'jeaRiz8rnZU',
    'kK8_gOKs0CU',
    'JAPqx7oGICo',
    'oD0MfW4kw6s',
    'vJ9G8U3-Wt0',
    'Mvd0_hinj9c',
    '9cqsPLwqBCY',
    '1TyNJhDDIj4',
    'JrwTDddkLI8',
    '5lfQy_ehUks',
    '539srudBFPA',
    'BAqLFdEKi1w',
    '4Hb-m8Wk7I8',
    'SbCjMV3rG-o',
    'FDU6NDD6Stk',
    'Xd0Iv6Pg0qc',
    'n3LVxp1EpHw',
    'M1eOAkSjS6I',
    'JN2hDbeNTxg',
    'xr9IceS_LMs',
    'ImSE6SVKRaw',
    'BrKdNrVM14k',
    'UAfwLmPnApw',
    'q2fF9MtKGas',
    '8LaLYnuwEc4',
    'YRWyyyexyos',
    'nmekxquZnRQ',
    'bEF52N8qRhM',
    'qERgzfOUoKU',
    '9SCYHOFMIXs',
    'sNhQ94si57Q',
    'Hdk9gx_95QQ',
    '-l69oaaDapw',
    'BhF36pNQsJQ',
    '4zxDSBBACZI',
    'cq4-eOj0-nQ',
    'ALvv4LhpnHw',
    '_Vx1WR5tseQ',
    'dGLfggjm2oU',
    'LVjqyj-cjKo',
    'bdgz_PfdYJo',
    'cPPKjirsJok',
    'TinGgGXTVj4',
    'J_cxjBVjJlU',
    'Td6gh3RS_f4',
    'DL4DgyTRejw',
    'EL-fmZE90gk',
    'hMTX0HFIlGo',
    'CQ5ML7mjpRs',
    '7hLd34lGvG8',
    'XnWmWFGGjIE',
    'zEtZ-MYACF8',
    '5QHm1Pr6Z3g',
    '-JZEMa4dn-g',
    'Mzew-m15fH4',
    'kXt3Lchb8iA',
    'FecZIS3dw8I',
    'AEy6Efq4h3U',
    'uhNh7Zsd3uc',
    'CXcVfw2mvbM',
    'Co5MOpeE0Do',
    'eXrzIFlGgqo',
    'jpMpMrv12Jc',
    'QUJ5g88ROMw',
    'f62-szhsajg',
    'IKDRmEAIrfo',
    'b6v4Mig38NY',
    '356xn45556E',
    'bg1LqAruHtE',
    'naaJVvYJd0k',
    '6vdZhDMvoxM'
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

