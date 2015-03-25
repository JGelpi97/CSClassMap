$(function(){ // on dom ready

	var cy = cytoscape({
	container: document.getElementById('cy'),

	style: cytoscape.stylesheet()
	.selector('node')
	.css({
		'content': 'data(name)',
		'text-valign': 'center',
		'color': 'white',
		'text-outline-width': 1,
		'text-outline-color': '#888',
  		'width': '75',
  		'height': '50'
	})    
	.selector('edge')
	.css({        
	  'target-arrow-shape': 'triangle',
	  'line-color': '#000000',
	  'target-arrow-color': '#000000',
	  'line-style': 'dashed',
	  'width': .5
	})
	.selector('.edgeCoReq')            //Special edge that identifies co-req classes
	.css({      
	  'mid-source-arrow-shape': 'diamond',
	  'mid-source-arrow-color': '#2B2B2B'
	})
	.selector('.mouseOverEdge')            //Edge look for mouse overing
	.css({      
	  'line-style': 'solid',
	  'line-color': 'black',
	  'width': 3
	})
	.selector('.mouseOverNode')            //Node look for mouse overing
	.css({      
	  'background-color': 'black',
	})	
	.selector('.edgeLight')            //Special edge that identifies co-req classes
	.css({      
	  'line-color': 'a7a5a5',
	  'line-style': 'dashed',
	  'width': .3
	}), 

	motionBlur: false,
	wheelSensitivity: .5,

	elements: [
	{ // node
	  group: 'nodes', // 'nodes' for a node, 'edges' for an edge

	  // NB: id fields must be strings
	  data: { // element data (put dev data here)
		id: 'CS401', // mandatory for each element, assigned automatically on undefined
		name: 'CS401'
	  },

	  position: { // the model position of the node (optional on init, mandatory after)
		x: 1000,
		y: 0
	  },

	  grabbable: false, // movable   
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS441',
		name: 'CS441'
	  },

	  position: {
		x: 1100,
		y: 100
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS445',
		name: 'CS445'
	  },

	  position: {
		x: 600,
		y: 100
	  },

	  grabbable: false,  
	},    

	{ // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS447',
		name: 'CS447'
	  },

	  position: {
		x: 1000,
		y: 200
	  },

	  grabbable: false,
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS449',
		name: 'CS449'
	  },

	  position: {
		x: 1200,
		y: 200
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1501',
		name: 'CS1501'
	  },

	  position: {
		x: 1000,
		y: 500
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1502',
		name: 'CS1502'
	  },

	  position: {
		x: 1200,
		y: 500
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1510',
		name: 'CS1510'
	  },

	  position: {
		x: 1000,
		y: 600
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1511',
		name: 'CS1511'
	  },

	  position: {
		x: 1200,
		y: 600
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS1515',
		name: 'CS1515'
	  },

	  position: {
		x: -200,
		y: 250
	  },

	  grabbable: false,  
	},    

	{ // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS1520',
		name: 'CS1520'
	  },

	  position: {
		x: -50,
		y: 250
	  },

	  grabbable: false,  
	}, 

   { // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS1530',
		name: 'CS1530'
	  },

	  position: {
		x: 100,
		y: 250
	  },

	  grabbable: false,  
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1538',
		name: 'CS1538'
	  },

	  position: {
		x: 800,
		y: 500
	  },

	  grabbable: false,
	},       

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1541',
		name: 'CS1541'
	  },

	  position: {
		x: 1350,
		y: 400
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  
	  data: {
		id: 'CS1550',
		name: 'CS1550'
	  },

	  position: {
		x: 1100,
		y: 300
	  },

	  grabbable: false,
	}, 

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1555',
		name: 'CS1555'
	  },

	  position: {
		x: 600,
		y: 250
	  },

	  grabbable: false,
	},     

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1566',
		name: 'CS1566'
	  },

	  position: {
		x: 800,
		y: 600
	  },

	  grabbable: false,
	},      

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1567',
		name: 'CS1567'
	  },

	  position: {
		x: 450,
		y: 250
	  },

	  grabbable: false,
	},   

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1571',
		name: 'CS1571'
	  },

	  position: {
		x: 915,
		y: 700
	  },

	  grabbable: false,
	},     

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1573',
		name: 'CS1573'
	  },

	  position: {
		x: 1285,
		y: 700
	  },

	  grabbable: false,
	},     

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1621',
		name: 'CS1621'
	  },

	  position: {
		x: 700,
		y: 350
	  },

	  grabbable: false,
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1622',
		name: 'CS1622'
	  },

	  position: {
		x: 1500,
		y: 300
	  },

	  grabbable: false,
	},   

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1630',
		name: 'CS1630'
	  },

	  position: {
		x: 800,
		y: 700
	  },

	  grabbable: false,
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1631',
		name: 'CS1631'
	  },

	  position: {
		x: 520,
		y: 350
	  },

	  grabbable: false,
	},

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1632',
		name: 'CS1632'
	  },

	  position: {
		x: 50,
		y: 350
	  },

	  grabbable: false,
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1635',
		name: 'CS1635'
	  },

	  position: {
		x: 150,
		y: 350
	  },

	  grabbable: false,
	},  

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1645',
		name: 'CS1645'
	  },

	  position: {
		x: 1500,
		y: 400
	  },

	  grabbable: false,
	},   

	{ // node
	  group: 'nodes',

	  data: {
		id: 'CS1651',
		name: 'CS1651'
	  },

	  position: {
		x: 1100,
		y: 395
	  },

	  grabbable: false,
	},

    { // node
      group: 'nodes',

      data: {
        id: 'CS1652',
        name: 'CS1652'
      },

      position: {
        x: 1650,
        y: 400
      },

      grabbable: false,
    },

    { // node
      group: 'nodes',

      data: {
        id: 'CS1653',
        name: 'CS1653'
      },

      position: {
        x: 1300,
        y: 600
      },

      grabbable: false,
    },

    { // node
      group: 'nodes',

      data: {
        id: 'CS1655',
        name: 'CS1655'
      },

      position: {
        x: 250,
        y: 350
      },

      grabbable: false,
    }, 

    { // node
      group: 'nodes',

      data: {
        id: 'CS1666',
        name: 'CS1666'
      },

      position: {
        x: 675,
        y: 700
      },

      grabbable: false,
    },  

    { // node
      group: 'nodes',

      data: {
        id: 'CS1671',
        name: 'CS1671'
      },

      position: {
        x: 1100,
        y: 800
      },

      grabbable: false,
    }, 

    { // node
      group: 'nodes',

      data: {
        id: 'CS1675',
        name: 'CS1675'
      },

      position: {
        x: 550,
        y: 600
      },

      grabbable: false,
    },     

    { // node
      group: 'nodes',

      
      data: {
        id: 'CS1699',
        name: 'CS1699'
      },

      position: {
        x: -125,
        y: 350
      },

      grabbable: false,  
    },            

	//EDGES--------------------------------------------

	{ // edge e1
		group: 'edges',
		data: {
			id: 'e1',
		source: 'CS401', // the source node id (edge comes from this node)
		target: 'CS445'  // the target node id (edge goes to this node)
	  }
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e2',
		source: 'CS445',
		target: 'CS447'
	  },
	  classes: 'edgeCoReq',
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e3',
		source: 'CS445',
		target: 'CS449'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e4',
		source: 'CS441',
		target: 'CS449'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e5',
		source: 'CS447',
		target: 'CS449'
	  },
	  classes: 'edgeCoReq',
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e6',
		source: 'CS445',
		target: 'CS1501'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e7',
		source: 'CS441',
		target: 'CS1501'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e8',
		source: 'CS445',
		target: 'CS1502'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e9',
		source: 'CS441',
		target: 'CS1502'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e10',
		source: 'CS1501',
		target: 'CS1510'
	  },
	},    

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e11',
		source: 'CS1502',
		target: 'CS1510'
	  },
	},    

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e12',
		source: 'CS1502',
		target: 'CS1511'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e13',
		source: 'CS445',
		target: 'CS1515'
	  },
	},     

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e14',
		source: 'CS445',
		target: 'CS1520'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e15',
		source: 'CS445',
		target: 'CS1530'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e16',
		source: 'CS447',
		target: 'CS1538'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e17',
		source: 'CS449',
		target: 'CS1541'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e18',
		source: 'CS447',
		target: 'CS1550'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e19',
		source: 'CS449',
		target: 'CS1550'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e20',
		source: 'CS445',
		target: 'CS1555'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e21',
		source: 'CS441',
		target: 'CS1555'
	  },
	},     

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e22',
		source: 'CS447',
		target: 'CS1566'
	  },      
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e23',
		source: 'CS445',
		target: 'CS1567'
	  },      
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e24',
		source: 'CS441',
		target: 'CS1567'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e25',
		source: 'CS1501',
		target: 'CS1571'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e26',
		source: 'CS1502',
		target: 'CS1571'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e27',
		source: 'CS1501',
		target: 'CS1573'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e28',
		source: 'CS1502',
		target: 'CS1573'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e29',
		source: 'CS445',
		target: 'CS1621'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e30',
		source: 'CS441',
		target: 'CS1621'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e31',
		source: 'CS447',
		target: 'CS1622'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e32',
		source: 'CS441',
		target: 'CS1622'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e33',
		source: 'CS1501',
		target: 'CS1630'
	  },
	},

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e34',
		source: 'CS445',
		target: 'CS1631'
	  },
	},    

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e35',
		source: 'CS441',
		target: 'CS1631'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e36',
		source: 'CS445',
		target: 'CS1632'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e37',
		source: 'CS445',
		target: 'CS1635'
	  },
	}, 

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e38',
		source: 'CS447',
		target: 'CS1645'
	  },
	},     

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e39',
		source: 'CS449',
		target: 'CS1645'
	  },
	},     

	{ // edge
	  group: 'edges',
	  data: {
		id: 'e40',
		source: 'CS1550',
		target: 'CS1651'
	  },
	},   

    { // edge
      group: 'edges',
      data: {
        id: 'e41',
        source: 'CS449',
        target: 'CS1652'
      },
    }, 

    { // edge
      group: 'edges',
      data: {
        id: 'e42',
        source: 'CS449',
        target: 'CS1653'
      },
    },

    { // edge
      group: 'edges',
      data: {
        id: 'e43',
        source: 'CS1501',
        target: 'CS1653'
      },
    },      

    { // edge
      group: 'edges',
      data: {
        id: 'e44',
        source: 'CS441',
        target: 'CS1655'
      },
    },      

    { // edge
      group: 'edges',
      data: {
        id: 'e45',
        source: 'CS445',
        target: 'CS1655'
      },
    },    

    { // edge
      group: 'edges',
      data: {
        id: 'e46',
        source: 'CS1566',
        target: 'CS1666'
      },
    }, 

    { // edge
      group: 'edges',
      data: {
        id: 'e47',
        source: 'CS1501',
        target: 'CS1671'
      },
    },     

    { // edge
      group: 'edges',
      data: {
        id: 'e48',
        source: 'CS1502',
        target: 'CS1671'
      },
    },     

    { // edge
      group: 'edges',
      data: {
        id: 'e49',
        source: 'CS1501',
        target: 'CS1675'
      },
    }, 

	],

	layout: {
		name: 'preset'
	},

});

//cy.toolbar();

cy.on('tap', 'node', function(){
	this.unselect();
	document.getElementById(this.data('name')).click();  //This nodes name.click() - finds the hidden button with the name to open the modal    
});

function highlight(node)
{
    var incomingData = node.incomers();     //incomers() is returned as [edge,node,edge,node,...]
    node.addClass('mouseOverNode');
    for (var i = 0; i < incomingData.length; i++)
    {
        if (i == 0 || i % 2 == 0)   //Every other incomer is an edge
        {
            incomingData[i].addClass('mouseOverEdge');
        }
        else
        {
            incomingData[i].addClass('mouseOverNode');
            highlight(incomingData[i]);
        }
    }
}

function unhighlight(node)
{
    var incomingData = node.incomers();
    node.removeClass('mouseOverNode');
    for (var i = 0; i < incomingData.length; i++)
    {
        if (i == 0 || i % 2 == 0)   //Every other incomer is an edge
        {
            incomingData[i].removeClass('mouseOverEdge');
        }
        else
        {
            incomingData[i].removeClass('mouseOverNode');
            unhighlight(incomingData[i]);
        }
    }
}

cy.on('mouseover', 'node', function(){
    highlight(this);
});

cy.on('mouseout', 'node', function(){
    unhighlight(this);
});

}); // on dom ready