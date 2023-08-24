---
title: rings data file
---
const rings = [
{% for ring in site.data.rings %}
    { 
        "name": "{{ ring.ring }}", 
        "color": "{{ ring.color }}", 
    },
{% endfor %} 
]
