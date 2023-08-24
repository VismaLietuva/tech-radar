---
title: quadrants data file
---
const quadrants = [
{% for quadrant in site.data.quadrants %}
    { 
        "name": "{{ quadrant.quadrant }}", 
        "link": "/{{ quadrant.quadrant | downcase | replace: " & ", "-and-" | replace: " ", "-" | url_encode }}",
    },
{% endfor %} 
]
