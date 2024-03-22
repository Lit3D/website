function getRandomPosition(container, element) {
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	const elementWidth = element.clientWidth;
	const elementHeight = element.clientHeight;

	const maxX = containerWidth - elementWidth;
	const maxY = containerHeight * 2 - elementHeight - 16;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	return { x: randomX, y: randomY };
}

const shuffleProjects = () => {
	const projectItems = document.querySelectorAll('.p-card');

	projectItems.forEach((element) => {
		const itemContainer = element.closest('.projects__col-inner');
		const position = getRandomPosition(itemContainer, element);

		element.style.left = position.x + 'px';
		element.style.top = position.y + 'px';
	});
}

export { shuffleProjects };
