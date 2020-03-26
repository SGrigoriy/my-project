var colors = [
    ['#181115', '#30222A'], ['#181115', '#30222A'], ['#181115', '#30222A'], ['#181115', '#30222A']
];
for (var i = 1; i <= 10; i++) {
var child = document.getElementById('circles-' + i),
    percentage = 30 + (i * 10);

Circles.create({
    id:         child.id,
    percentage: percentage,
    radius:     100,
    width:      10,
    number:   	percentage / 1,
    text:       '%',
    colors:     colors[i - 5]
});
}