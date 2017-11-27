async function getMenu() {
  const items = await fetch('items.json');
  const fin = await items.json();
  return fin;
}

function getItems(menu) {
  const keys = Object.keys(menu);
  const items = [];
  keys.forEach((key) => {
    menu[key].forEach(item => items.push(item));
  });
  return items;
}

async function test() {
  let menu = await getMenu();
  menu.forEach(e => console.log(e))
  menu = menu[0];
  const keys = getItems(menu);
  console.log(keys);
}

test();
const nodeHelpers = {
	getChildNodes(el) {
		const childNodes = el.childNodes;
		return Array.from(childNodes);
	},
	getSiblings(el) {
		const siblings = el.parentNode.childNodes;
		return Array.from(siblings);
	},
	removeTextNodes(el) {
		return el.filter(node => node.nodeType !== 3);
	},
	checkUlNodes(el) {
		return el.some(node => node.nodeName === 'UL');
	},
	checkParentHidden(el) {
		return el.parentNode.className === 'hidden';
	},
	filterUlNodes(el) {
		return el.filter(node => node.nodeName === 'UL');
	},
	hideUlNodes(el) {
		el.forEach(node => node.classList.toggle('hidden'));
	},
	activeNodes() {
		return document.getElementsByClassName('is-active');
	},
	addActiveNode(nodes) {
		nodes[0].classList.toggle('is-active');
	},
	removeActiveNodes(nodes) {
		nodes[0].classList.remove('is-active');
	},
};
const nodeHelpers = {
  getChildNodes(el) {
    const childNodes = el.childNodes;
    return Array.from(childNodes);
  },
  getSiblings(el) {
    const siblings = el.parentNode.childNodes;
    return Array.from(siblings);
  },
  removeTextNodes(el) {
    return el.filter(node => node.nodeType !== 3);
  },
  checkUlNodes(el) {
    return el.some(node => node.nodeName === 'UL');
  },
  checkParentHidden(el) {
    return el.parentNode.className === 'hidden';
  },
  filterUlNodes(el) {
    return el.filter(node => node.nodeName === 'UL');
  },
  hideUlNodes(el) {
    el.forEach(node => node.classList.toggle('hidden'));
  },
  activeNodes() {
    return document.getElementsByClassName('is-active');
  },
  addActiveNode(nodes) {
    nodes[0].classList.toggle('is-active');
  },
  removeActiveNodes(nodes) {
    nodes[0].classList.remove('is-active');
  },
};

const menuControl = {
  getLi(menu) {
    const menuDiv = document.getElementById(menu);
    const menuLi = menuDiv.getElementsByTagName('li');
    return Array.from(menuLi);
  },
  addEvents(menu) {
    const liArray = this.getLi(menu);
    liArray.forEach((li) => {
      li.onclick = (e) => {
        const childNodes = nodeHelpers.getChildNodes(li);
        const activeNodes = nodeHelpers.activeNodes(li);

        // only one li should be active at a time
        while (activeNodes.length) nodeHelpers.removeActiveNodes(activeNodes);

        // open/close li containing nested ul
        if (nodeHelpers.checkUlNodes(childNodes)) {
          const ulNodes = nodeHelpers.filterUlNodes(childNodes);
          nodeHelpers.hideUlNodes(ulNodes);
        }

        // close nested menu if other li that is not contained is clicked
        // checks siblings to see if they have a ul
        // only close a ul if its a sibling of the clicked element
        if (!nodeHelpers.checkUlNodes(childNodes)) {
          // a -> li -> ul.childNodes === siblings of li
          const sib = nodeHelpers.getSiblings(e.target.parentNode);
          const siblings = nodeHelpers.removeTextNodes(sib);

          siblings.forEach((sibling) => {
            const childs = nodeHelpers.getChildNodes(sibling);
            const ul = nodeHelpers.filterUlNodes(childs);
            if (ul.length) {
              ul[0].className = 'hidden';
            }
          });
        }

        nodeHelpers.addActiveNode(childNodes);
        // prevent a nested li firing parent event
        e.stopPropagation();
      };
    });
  },
};

const createMenu = {
  mainMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.className = 'container';
    document.body.appendChild(menu);
    return menu;
  },
  aside(menu) {
    const aside = document.createElement('aside');
    aside.className = 'menu';
    menu.appendChild(aside);
    return aside;
  },
  menuLabel(aside, text) {
    const menuLabel = document.createElement('p');
    const textNode = document.createTextNode(text);
    menuLabel.className = 'menu-label';
    menuLabel.appendChild(textNode);
    aside.appendChild(menuLabel);
  },
  menuUl(el) {
    const menuUl = document.createElement('ul');
    menuUl.className = 'menu-list';
    el.appendChild(menuUl);
    return menuUl;
  },
  menuLi(menuUl, text, hidden) {
    const menuLi = document.createElement('li');
    const menuA = document.createElement('a');
    const textNode = document.createTextNode(text);
    menuA.appendChild(textNode);
    menuLi.appendChild(menuA);
    menuUl.appendChild(menuLi);
    if (hidden) menuUl.className = 'hidden';
    return menuLi;
  },
  render() {
    const mainMenu = this.mainMenu();
    const aside = this.aside(mainMenu);
    this.menuLabel(aside, 'label-sample');
    const menuUl = this.menuUl(aside);
    this.menuLi(menuUl, 'li-sample');

    // nested method
    const nestedLi = this.menuLi(menuUl, 'nested');
    const nestedUl = this.menuUl(nestedLi);
    this.menuLi(nestedUl, 'nested', true);
  },
};

// createMenu.render();
menuControl.addEvents('menu');
