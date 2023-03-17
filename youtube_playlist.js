
let playlists = [];

let playlist1 = {
  name: 'A1-B1 Grammatik Aktiv',
  videos: [
    'https://www.youtube.com/embed/DHZSFAJby8o',
    'https://www.youtube.com/embed/3X18Qtlwp6I',
    'https://www.youtube.com/embed/SKZnHCPYJtk',
    'https://www.youtube.com/embed/VmgCF5L7JGM',
    'https://www.youtube.com/embed/787i-L1pzs8',
    'https://www.youtube.com/embed/QCXxzK5P228',
    'https://www.youtube.com/embed/S4qgC7QWjUU',
    'https://www.youtube.com/embed/6PYs23S7yRU',
    'https://www.youtube.com/embed/oAWEVc1dZd8',
    'https://www.youtube.com/embed/-0lrp7J6xpI',
    'https://www.youtube.com/embed/VrOfz2rlOJ4',
    'https://www.youtube.com/embed/VrOfz2rlOJ4',
    'https://www.youtube.com/embed/fLut1O_bWDg',
    'https://www.youtube.com/embed/9BUbel1wUlc',
    'https://www.youtube.com/embed/LnN4EnX8I_E',
    'https://www.youtube.com/embed/MkfIIzqU62E',
    'https://www.youtube.com/embed/aSDyWBMs6OM',
    'https://www.youtube.com/embed/U7px8sNvaQM',
    'https://www.youtube.com/embed/WbAddEgYowc',
    'https://www.youtube.com/embed/Urat-ZQlWDw',
    'https://www.youtube.com/embed/SMNuAGxZza8',
    'https://www.youtube.com/embed/r9orv85MoOU',
    'https://www.youtube.com/embed/q1wwLdBY_SU',
    'https://www.youtube.com/embed/ULD7fk6GR44',
    'https://www.youtube.com/embed/zyB0ZsTt2-k',
    'https://www.youtube.com/embed/XlwWj4Fb4Fw',
    'https://www.youtube.com/embed/ULyeBmezSkI',
    'https://www.youtube.com/embed/hCxLz0WaZxs',
    'https://www.youtube.com/embed/MH0HFQrBjWo',
    'https://www.youtube.com/embed/68bLUvNk7Xc',
    'https://www.youtube.com/embed/t4pb3bKzGaU',
    'https://www.youtube.com/embed/Rk5zrj84GMw',
    'https://www.youtube.com/embed/kOkmlpPZyr4',
    'https://www.youtube.com/embed/XiNReagcP9A',
    'https://www.youtube.com/embed/524eEp-kFe4',
    'https://www.youtube.com/embed/3DxPl3-zWiM',
    'https://www.youtube.com/embed/bAh7qy0Ygng',
    'https://www.youtube.com/embed/Chuhx6sEf8k',
    'https://www.youtube.com/embed/ygBvGoh8gXY',
    'https://www.youtube.com/embed/BgfA1Xgr6NQ',
    'https://www.youtube.com/embed/boaF5g7_h50',
    'https://www.youtube.com/embed/m4ROPteJO0A',
    'https://www.youtube.com/embed/ebaV8B10Vds',
    'https://www.youtube.com/embed/-gAXuMpLo14',
    'https://www.youtube.com/embed/-8BPPWNJ5gc',
    'https://www.youtube.com/embed/peYUhfF3Z7k',
    'https://www.youtube.com/embed/pQ03-zbMsLM',
    'https://www.youtube.com/embed/GL1RUWXpPq4',
    'https://www.youtube.com/embed/7lByLRxM1jY',
    'https://www.youtube.com/embed/Z2-aqllkTwQ',
    'https://www.youtube.com/embed/SVl-XJCEyjg',
    'https://www.youtube.com/embed/NQ6e3o1xNDE',
    'https://www.youtube.com/embed/IG6O7WxDAnI',
    'https://www.youtube.com/embed/ERf74vnRSlY',
    'https://www.youtube.com/embed/xPxjgdzANsM',
    'https://www.youtube.com/embed/jBOEaBj1QKM',
    'https://www.youtube.com/embed/yLfeWVgqdZc',
    'https://www.youtube.com/embed/pN13IZxGaM0',
    'https://www.youtube.com/embed/esPiXSAL75g',
    'https://www.youtube.com/embed/xsh1yB2n_X4',
    'https://www.youtube.com/embed/buqHKZP80-w',
    'https://www.youtube.com/embed/p3OfcYg8D74',
    'https://www.youtube.com/embed/b_4-RRYIRwY',
    'https://www.youtube.com/embed/vi8BUi19bNo',
    'https://www.youtube.com/embed/sXVxOtKOy8Y',
    'https://www.youtube.com/embed/A4PG2RdcQT0',
    'https://www.youtube.com/embed/GfV6GtLGY08',
    'https://www.youtube.com/embed/Lx7uFLPWgEc',
    'https://www.youtube.com/embed/N4Buqrthxe8',
    'https://www.youtube.com/embed/irnsYNwDkA4',
    'https://www.youtube.com/embed/x-knO3PTsgQ',
    'https://www.youtube.com/embed/7JZ0Z3fTrcc',
    'https://www.youtube.com/embed/f5BNCvIJn3Q',
    'https://www.youtube.com/embed/ijtEhxFgeNA',
    'https://www.youtube.com/embed/UT8Rbw1CYyQ',
    'https://www.youtube.com/embed/DIdzLIlvtwo',
    'https://www.youtube.com/embed/zJrwxYqZ-O4',
    'https://www.youtube.com/embed/eWs33-Laj-M',
    'https://www.youtube.com/embed/R9SEKCDsKRY',
    'https://www.youtube.com/embed/IFUj4EcOOsA',
    'https://www.youtube.com/embed/vIIYte_AW_o',
    'https://www.youtube.com/embed/DCKSGIHn7SI',
    'https://www.youtube.com/embed/yV5nt4tEi-U',
    'https://www.youtube.com/embed/ZzUs6ywuRR8',
    'https://www.youtube.com/embed/pZsB34mINwA',
  ]
}

let playlist2 = {
  name: 'Brieftraining B1',
  videos: [
    'https://www.youtube.com/embed/JolTIkocOvA',
    'https://www.youtube.com/embed/T_55kQMNAdI',
    'https://www.youtube.com/embed/4vWcQiH3vj4',
    'https://www.youtube.com/embed/bchHgNz9juQ',
    'https://www.youtube.com/embed/Lnma01G8KoE',
    'https://www.youtube.com/embed/zUj-UvdLDWc',
    'https://www.youtube.com/embed/8osShUqs8_k',
    'https://www.youtube.com/embed/6bXbzHjnWnI',
    'https://www.youtube.com/embed/PUlUY2viJeo',
    'https://www.youtube.com/embed/Q9ulofrg5IE',
    'https://www.youtube.com/embed/rwkw3l_Mu00',
    'https://www.youtube.com/embeed/gEKUY6OJyOw',
    'https://www.youtube.com/embed/3gD1Ctp2ugc',
    'https://www.youtube.com/embed/X7UPPWTr3GU',
    'https://www.youtube.com/embed/60wJzWvBUvc',
    'https://www.youtube.com/embed/YhTrESCNLhg',
  ]
}

let playlist3 = {
  name: 'telc - DTZ-Übungsheft',
  videos: [
    'https://www.youtube.com/embed/ZvQKyTbO90M',
    'https://www.youtube.com/embed/sDM_FWLIMd8',
    'https://www.youtube.com/embed/5av7E8M5PNg',
    'https://www.youtube.com/embed/hsXUeKjrpQM',
    'https://www.youtube.com/embed/cTiFaWk7taY',
    'https://www.youtube.com/embed/_VKGFzIUjPc',
    'https://www.youtube.com/embed/ZzOX9qZkF6k',
    'https://www.youtube.com/embed/vdb5_uLpNcI',
    'https://www.youtube.com/embed/eRg0MX-Iq74',
    'https://www.youtube.com/embed/yFpvm2FCa6I',
    'https://www.youtube.com/embed/-iRLVveNyWI',
    'https://www.youtube.com/embed/fXjxoQf7d-Q',
    'https://www.youtube.com/embed/XCl1OGsg1io',
  ]
}

let playlist4 = {
  name: 'Prüfungsvorbereitungen A1',
  videos: [
    'https://www.youtube.com/embed/j3JdCJ7opdw',
    'https://www.youtube.com/embed/6WFNU3DNHaQ',
    'https://www.youtube.com/embed/D24isayQ4V0',
    'https://www.youtube.com/embed/JttyD3EeY4M',
    'https://www.youtube.com/embed/pXpC74EU_m8',
  ]
}
let playlist5 = {
  name: 'Prüfungsvorbereitungen A2',
  videos: [
    'https://www.youtube.com/embed/kQliZwjPSfY',
    'https://www.youtube.com/embed/tadYWoFnmHg',
    'https://www.youtube.com/embed/X828JD9nwQc',
    'https://www.youtube.com/embed/1dVbP5cgzcA',
    'https://www.youtube.com/embed/RmfFROCH0Z0',
  ]
}
let playlist6 = {
  name: 'Prüfungsvorbereitungen B1/DTZ',
  videos: [
    'https://www.youtube.com/embed/fjMJHuMOkV8',
    'https://www.youtube.com/embed/NMmKJq3oPgo',
    'https://www.youtube.com/embed/zE1qjBDlbRU',
    'https://www.youtube.com/embed/OpfJUVHW8lQ',
    'https://www.youtube.com/embed/6nP0iy80OEE',
    'https://www.youtube.com/embed/4BfeOZf798k',
    'https://www.youtube.com/embed/anMdXk2gb7s',
    'https://www.youtube.com/embed/Pz3z5a1FPHE',
    'https://www.youtube.com/embed/uBTu9AMXTJQ',
    'https://www.youtube.com/embed/Dl7m_-G16j0',
    'https://www.youtube.com/embed/Rc48_pNxTxc',
    'https://www.youtube.com/embed/n2xJVpQlcM4',
  ]
}
let playlist7 = {
  name: 'A2B1 Lektüre - Großstadtliebe',
  videos: [
    'https://www.youtube.com/embed/iiqmPG8zlLo',
    'https://www.youtube.com/embed/3KEvRKsYWsA',
    'https://www.youtube.com/embed/_Dwt0hwBY9I',
    'https://www.youtube.com/embed/ZnoMsmTqIqY',
    'https://www.youtube.com/embed/7E1pDoaKORk',
    'https://www.youtube.com/embed/mOr3LGnoz3A',
    'https://www.youtube.com/embed/DUE5mQwxPQM',
    'https://www.youtube.com/embed/0TSg2IYPvKA',
    'https://www.youtube.com/embed/m-QNtClLmqQ',
    'https://www.youtube.com/embed/8qLBqoaPFyw',
    'https://www.youtube.com/embed/n57Ht3SxG5M',
    'https://www.youtube.com/embed/vqjJ89-9M8M',
  ]
}
let playlist8 = {
  name: 'A2B1 Lektüre - Die Entscheidung',
  videos: [
    'https://www.youtube.com/embed/q5Io13EtNnc',
    'https://www.youtube.com/embed/ONlcABAZlNg',
    'https://www.youtube.com/embed/42wrM24yRUg',
    'https://www.youtube.com/embed/bvtAcZ79UiU',
    'https://www.youtube.com/embed/DEiLepSYDTc',
    'https://www.youtube.com/embed/v6HEJo1xNbE',
    'https://www.youtube.com/embed/kOyJinivXOU',
    'https://www.youtube.com/embed/nIro7TGyth4',
    'https://www.youtube.com/embed/xmbE9duJjkM',
    'https://www.youtube.com/embed/MBOCkopYcqw',
    'https://www.youtube.com/embed/0kI9qswwqM4',
    'https://www.youtube.com/embed/lUPofc0kHUc',
  ]
}
let playlist9 = {
  name: 'DW - Top Thema',
  videos: [
    'https://www.youtube.com/embed/01kxiUqKhwY',
    'https://www.youtube.com/embed/QzCDnyEZIK8',
    'https://www.youtube.com/embed/JSsoMba-sLM',
    'https://www.youtube.com/embed/KhRUi7SIADU',
    'https://www.youtube.com/embed/Gj82Yc7INH0',
    'https://www.youtube.com/embed/H7G7M0cBoGk',
    'https://www.youtube.com/embed/eCEspIPVBf0',
    'https://www.youtube.com/embed/8gj8L9wMxxc',
    'https://www.youtube.com/embed/l24zG3K-SYY',
    'https://www.youtube.com/embed/VMiPy6bN7Iw',
    'https://www.youtube.com/embed/v15iN9bb4F8',
    'https://www.youtube.com/embed/yvRdnactJUI',
    'https://www.youtube.com/embed/cLncPwFA1Dc',
    'https://www.youtube.com/embed/dY3vhMVYIZQ',
    'https://www.youtube.com/embed/UI5a5GUoCk4',
    'https://www.youtube.com/embed/p-MJqpI8O-g',
    'https://www.youtube.com/embed/v6W0hg2E488',
    'https://www.youtube.com/embed/DeCy4UdrHEg',
    'https://www.youtube.com/embed/GZHDXrxBNgo',
    'https://www.youtube.com/embed/R41lmqFGYvY',
    'https://www.youtube.com/embed/H8UzojKfT30',
    'https://www.youtube.com/embed/ISe3A7gVY2Q',
    'https://www.youtube.com/embed/ITJ4BjFe4N0',
  ]
}
let playlist10 = {
  name: 'B1+ Grammatik Aktiv',
  videos: [
    'https://www.youtube.com/embed/8ArOj0atcfc',
    'https://www.youtube.com/embed/P7quF5wNkbw',
    'https://www.youtube.com/embed/mWSdZg257bE',
    'https://www.youtube.com/embed/YqGradpoDdc',
    'https://www.youtube.com/embed/n90UOUCkSNM',
    'https://www.youtube.com/embed/DhhP2yZSbR8',
    'https://www.youtube.com/embed/0TInYFo6hdE',
    'https://www.youtube.com/embed/ylVGBys99Ro',
    'https://www.youtube.com/embed/cWH_F71IYVg',
    'https://www.youtube.com/embed/Lrdi-X-Z3lk',
    'https://www.youtube.com/embed/293DAolICBE',
    'https://www.youtube.com/embed/1RTJwg-J6Pk',
    'https://www.youtube.com/embed/IHQyoYfSt2w',
    'https://www.youtube.com/embed/0x2B37lKIFU',
    'https://www.youtube.com/embed/m1rRN5-KSiM',
  ]
}
let playlist11 = {
  name: 'B2-C1',
  videos: [
    'https://www.youtube.com/embed/kj3nKHZOloU',
    'https://www.youtube.com/embed/bPCNX0TamfU',
    'https://www.youtube.com/embed/GiOK4WGxxl0',
    'https://www.youtube.com/embed/1-fvDD5YH5Y',
    'https://www.youtube.com/embed/CTDMHCyhMeM',
    'https://www.youtube.com/embed/BXTRRTzn4eQ',
    'https://www.youtube.com/embed/QIVU20utHdc',
    'https://www.youtube.com/embed/d0dWwoKymmE',
    'https://www.youtube.com/embed/dqvPdp9wJ0c',
    'https://www.youtube.com/embed/TNHL2QHMXmg',
    'https://www.youtube.com/embed/1Tv5cvxv-B0',
    'https://www.youtube.com/embed/4VJwO-ZSdAs',
    'https://www.youtube.com/embed/CmcqXlaJwak',
    'https://www.youtube.com/embed/IkaZMg24Lr0',
    'https://www.youtube.com/embed/NULRJx4vXUk',
    'https://www.youtube.com/embed/4fMzw2GOsc0',
    'https://www.youtube.com/embed/MeTl-ENRa-k',
    'https://www.youtube.com/embed/rCkZqu_G7wY',
    'https://www.youtube.com/embed/pOEzVN6SsUo',
    'https://www.youtube.com/embed/2gBMaKpy224',
    'https://www.youtube.com/embed/oSk_wFd7V2o',
    'https://www.youtube.com/embed/GDynh04jL4E',
    'https://www.youtube.com/embed/l9RH8iamVpo',
    'https://www.youtube.com/embed/8ugCmStlqN4',
    'https://www.youtube.com/embed/fbagftdSY-g',
    'https://www.youtube.com/embed/REM-JW76xU0',
    'https://www.youtube.com/embed/e2L2EHia9Xw',
    'https://www.youtube.com/embed/QReRvB62HBo',
    'https://www.youtube.com/embed/nptDrWmQReM',
    'https://www.youtube.com/embed/k4HnCQCSpg0',
    'https://www.youtube.com/embed/CRM8YR-sdfo',
    'https://www.youtube.com/embed/9Hv1haEgobo',
    'https://www.youtube.com/embed/jQ3wH4wQPp8',
    'https://www.youtube.com/embed/1fHwQWiq2DI',
    'https://www.youtube.com/embed/IQtsJ4CeW8w',
    'https://www.youtube.com/embed/_1aIkB0CFhs',
    'https://www.youtube.com/embed/T_AQti4P_0c',
    'https://www.youtube.com/embed/s89D0aDM1ok',
    'https://www.youtube.com/embed/A_khvlaZTOY',
    'https://www.youtube.com/embed/2IV5OjrsncI',
    'https://www.youtube.com/embed/I8fI4BasRCw',
    'https://www.youtube.com/embed/zbRynHPnUSM',
    'https://www.youtube.com/embed/NeLKCoyBOWU',
    'https://www.youtube.com/embed/Wn1duDPQvk0',
    'https://www.youtube.com/embed/fw_PJdG33bo',
    'https://www.youtube.com/embed/rArcIT-g-HE',
    'https://www.youtube.com/embed/Kpiyz1Mi9VM',
    'https://www.youtube.com/embed/ouFSF7idDC0',
    'https://www.youtube.com/embed/Ko1uVasxEl8',
    'https://www.youtube.com/embed/lzppNxx2rzk',
    'https://www.youtube.com/embed/3xcaisy1GXU',
    'https://www.youtube.com/embed/DTEci7KG7-E',
    'https://www.youtube.com/embed/dJX0veSFUMA',
    'https://www.youtube.com/embed/tBtO3GneshU',
    'https://www.youtube.com/embed/CmMTbLnjywc',
    'https://www.youtube.com/embed/0cfcOJLPBII',
    'https://www.youtube.com/embed/JLY9yu1cdpk',
    'https://www.youtube.com/embed/IXVC1ijSxFA',
    'https://www.youtube.com/embed/bsPOs66Wfdk',
    'https://www.youtube.com/embed/hBupJP6BD4w',
    'https://www.youtube.com/embed/3leBeIQcAGU',
    'https://www.youtube.com/embed/YteBaUadzGo',
    'https://www.youtube.com/embed/BYp4cPAgIZM',
    'https://www.youtube.com/embed/H2vG5PN9Vyw',
    'https://www.youtube.com/embed/2yd5CJQewwU',
    'https://www.youtube.com/embed/DtmXGLMXFXg',
    'https://www.youtube.com/embed/fJlJ9eoOh0I',
    'https://www.youtube.com/embed/apa1NxC_8Sg',
    'https://www.youtube.com/embed/NSO4frGZHL0',
    'https://www.youtube.com/embed/6014a_dv4Nc',
    'https://www.youtube.com/embed/lBeV48Jk56c',
    'https://www.youtube.com/embed/NklZ3dzWrlU',
    'https://www.youtube.com/embed/Oj2S_14_6vo',
    'https://www.youtube.com/embed/VehXryXxN44',
    'https://www.youtube.com/embed/PTUw02RtuAA',
    'https://www.youtube.com/embed/elmoKxklzws',
    'https://www.youtube.com/embed/aoZfTj2BrOA',
    'https://www.youtube.com/embed/lpKTGPbhCPE',
    'https://www.youtube.com/embed/42RlqBdmlJk',
    'https://www.youtube.com/embed/inAo66LPECY',
    'https://www.youtube.com/embed/3lxKVtN0yWY',
    'https://www.youtube.com/embed/saQayDCOFDw',
    'https://www.youtube.com/embed/wR3VgNbbOSg',
    'https://www.youtube.com/embed/MAZ6jLEseFk',
    'https://www.youtube.com/embed/ey0Qt2-15Vc',
    'https://www.youtube.com/embed/Yw81ZGLRERE',
    'https://www.youtube.com/embed/rbJ0oHMvse4',
    'https://www.youtube.com/embed/_VMAkZY_vZk',
    'https://www.youtube.com/embed/Mnd17FBUrs8',
    'https://www.youtube.com/embed/n4BJAEtafB4',
    'https://www.youtube.com/embed/zM3wGU9F6wI',
    'https://www.youtube.com/embed/nt98uQgmVgg',
    'https://www.youtube.com/embed/yEhN09nl-Ss',
  ]
}
let playlist12 = {
  name: 'B2 - Ek ders & Prüfungsvorbereitung',
  videos: [
    'https://www.youtube.com/embed/gv-nQB8Me_I',
    'https://www.youtube.com/embed/cc8b1-3GHCQ',
    'https://www.youtube.com/embed/KdBLLlGfIV4',
    'https://www.youtube.com/embed/hDrNNQng4VY',
    'https://www.youtube.com/embed/4UXUwXz8UT4',
    'https://www.youtube.com/embed/w75IXUQXO-Q',
  ]
}
let playlist13 = {
  name: 'A2',
  videos: [
    'https://youtube.com/embed/bN2VaN3X7m4',
    'https://youtube.com/embed/gpSnCUATFts',
    'https://youtube.com/embed/JQbb1hX8kGQ',
    'https://youtube.com/embed/jeaRiz8rnZU',
    'https://youtube.com/embed/kK8_gOKs0CU',
    'https://youtube.com/embed/JAPqx7oGICo',
    'https://youtube.com/embed/oD0MfW4kw6s',
    'https://youtube.com/embed/vJ9G8U3-Wt0',
    'https://youtube.com/embed/Mvd0_hinj9c',
    'https://youtube.com/embed/9cqsPLwqBCY',
    'https://youtube.com/embed/1TyNJhDDIj4',
    'https://youtube.com/embed/JrwTDddkLI8',
    'https://youtube.com/embed/5lfQy_ehUks',
    'https://youtube.com/embed/539srudBFPA',
    'https://youtube.com/embed/BAqLFdEKi1w',
    'https://youtube.com/embed/4Hb-m8Wk7I8',
    'https://youtube.com/embed/SbCjMV3rG-o',
    'https://youtube.com/embed/FDU6NDD6Stk',
    'https://youtube.com/embed/Xd0Iv6Pg0qc',
    'https://youtube.com/embed/n3LVxp1EpHw',
    'https://youtube.com/embed/M1eOAkSjS6I',
    'https://youtube.com/embed/JN2hDbeNTxg',
    'https://youtube.com/embed/xr9IceS_LMs',
    'https://youtube.com/embed/ImSE6SVKRaw',
    'https://youtube.com/embed/BrKdNrVM14k',
    'https://youtube.com/embed/UAfwLmPnApw',
    'https://youtube.com/embed/q2fF9MtKGas',
    'https://youtube.com/embed/8LaLYnuwEc4',
    'https://youtube.com/embed/YRWyyyexyos',
    'https://youtube.com/embed/nmekxquZnRQ',
    'https://youtube.com/embed/bEF52N8qRhM',
    'https://youtube.com/embed/qERgzfOUoKU',
    'https://youtube.com/embed/9SCYHOFMIXs',
    'https://youtube.com/embed/sNhQ94si57Q',
    'https://youtube.com/embed/Hdk9gx_95QQ',
    'https://youtube.com/embed/-l69oaaDapw',
    'https://youtube.com/embed/BhF36pNQsJQ',
    'https://youtube.com/embed/4zxDSBBACZI',
    'https://youtube.com/embed/cq4-eOj0-nQ',
    'https://youtube.com/embed/ALvv4LhpnHw',
    'https://youtube.com/embed/_Vx1WR5tseQ',
    'https://youtube.com/embed/dGLfggjm2oU',
    'https://youtube.com/embed/LVjqyj-cjKo',
    'https://youtube.com/embed/bdgz_PfdYJo',
    'https://youtube.com/embed/cPPKjirsJok',
    'https://youtube.com/embed/TinGgGXTVj4',
    'https://youtube.com/embed/J_cxjBVjJlU',
    'https://youtube.com/embed/Td6gh3RS_f4',
    'https://youtube.com/embed/DL4DgyTRejw',
    'https://youtube.com/embed/EL-fmZE90gk',
    'https://youtube.com/embed/hMTX0HFIlGo',
    'https://youtube.com/embed/CQ5ML7mjpRs',
    'https://youtube.com/embed/7hLd34lGvG8',
    'https://youtube.com/embed/XnWmWFGGjIE',
    'https://youtube.com/embed/zEtZ-MYACF8',
    'https://youtube.com/embed/5QHm1Pr6Z3g',
    'https://youtube.com/embed/-JZEMa4dn-g',
    'https://youtube.com/embed/Mzew-m15fH4',
    'https://youtube.com/embed/kXt3Lchb8iA',
    'https://youtube.com/embed/FecZIS3dw8I',
    'https://youtube.com/embed/AEy6Efq4h3U',
    'https://youtube.com/embed/uhNh7Zsd3uc',
    'https://youtube.com/embed/CXcVfw2mvbM',
    'https://youtube.com/embed/Co5MOpeE0Do',
    'https://youtube.com/embed/eXrzIFlGgqo',
    'https://youtube.com/embed/jpMpMrv12Jc',
    'https://youtube.com/embed/QUJ5g88ROMw',
    'https://youtube.com/embed/f62-szhsajg',
    'https://youtube.com/embed/IKDRmEAIrfo',
    'https://youtube.com/embed/b6v4Mig38NY',
    'https://youtube.com/embed/356xn45556E',
    'https://youtube.com/embed/bg1LqAruHtE',
    'https://youtube.com/embed/naaJVvYJd0k',
    'https://youtube.com/embed/6vdZhDMvoxM'
  ]
}


// playlists.push(playlist1);
// playlists.push(playlist2);
// playlists.push(playlist3);
// playlists.push(playlist4);
// playlists.push(playlist5);
// playlists.push(playlist6);
// playlists.push(playlist7);
// playlists.push(playlist8);
// playlists.push(playlist9);
// playlists.push(playlist10);
// playlists.push(playlist11);
// playlists.push(playlist12);
// playlists.push(playlist13);

const a2playlist = document.getElementById('a2playlist');
playlist13.videos.forEach(a2videoUrl => {
  let imgEl = document.createElement('img');
  imgEl.src = 'a2bild.png';
  imgEl.async = true;
  imgEl.classList.add('play-youtube-video');

  let videoPlaceEl = document.createElement('div');
  videoPlaceEl.classList.add('youtube-video-place');
  videoPlaceEl.classList.add('embed-responsive');
  videoPlaceEl.classList.add('embed-responsive-4by3');
  videoPlaceEl.dataset.ytUrl=a2videoUrl + "?rel=0&showinfo=0&autoplay=0";

  videoPlaceEl.appendChild(imgEl);
  a2playlist.appendChild(videoPlaceEl);
})


window.addEventListener('load', function() {
  const video_wrappers = document.querySelectorAll('.youtube-video-place');
  for (const video_wrapper of video_wrappers) {
    let playVideo = video_wrapper.querySelector('.play-youtube-video');
    let width = playVideo.getBoundingClientRect().width;
    let height = playVideo.getBoundingClientRect().height;
    playVideo.addEventListener('click', function() {
      const url = video_wrapper.dataset.ytUrl
      video_wrapper.innerHTML = '<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + url + '" width="' + width + '" height="' + height + '"></iframe>';
    })
  }
})


const wrapperEl = document.getElementById('playlists')

playlists.forEach((playlist) => {
  // create playlist container
  let playlistContainerEl = document.createElement('section');

  // put title div into playlist container
  let titleEl = document.createElement('div');
  titleEl.classList.add('title');

  let title = document.createElement('h2');
  title.textContent = playlist.name;

  let titleIconEl = document.createElement('i');
  titleIconEl.classList.add('fa-solid');
  titleIconEl.classList.add('fa-caret-down');

  titleEl.appendChild(title);
  titleEl.appendChild(titleIconEl);

  // create unordered list element for wrapping videos
  let listContainerEl = document.createElement('ul');
  playlist.videos.forEach((videoUrl, index)=> {
    // create list element for a video item
    let listEl = document.createElement('li');

    // create title inside this
    let listElTitle = document.createElement('h3');
    listElTitle.textContent = `Lektion ${++index}`;

    // create icon element for a video item
    let iconEl = document.createElement('i');
    iconEl.classList.add('fa-solid');
    iconEl.classList.add('fa-caret-down');

    // create iframe element for video link
    let iframeEl = document.createElement('iframe');
    iframeEl.src= videoUrl;
    iframeEl.allow = 'fullscreen';

    // append title element to list element
    listEl.appendChild(listElTitle);
    // append icon element to list element
    listEl.appendChild(iconEl);
    // append iframe element to list element
    listEl.appendChild(iframeEl);

    // add event listener for toglling showing videos
    listEl.addEventListener('click', () => {
      listEl.classList.toggle('showVideo');
      listElTitle.classList.toggle('active');
      iconEl.classList.toggle('active');
      iconEl.classList.toggle('fa-caret-down')
      iconEl.classList.toggle('fa-caret-right')
    })

    // append list element to unordered list element
    listContainerEl.appendChild(listEl);
  })

  // append title element
  playlistContainerEl.appendChild(titleEl);
  // append unordered list element to playlist container
  playlistContainerEl.appendChild(listContainerEl);

  // on click of title of sections video playlists should toggle showing
  titleEl.addEventListener('click', () => {
    listContainerEl.classList.toggle('showPlaylist')
    titleIconEl.classList.toggle('fa-caret-down');
    titleIconEl.classList.toggle('fa-caret-right');
    title.classList.toggle('active');
    titleIconEl.classList.toggle('active');
  })

  // append playlist container
  wrapperEl.appendChild(playlistContainerEl);
})
