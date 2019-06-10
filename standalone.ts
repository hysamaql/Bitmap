export function CT(matrix:number[][]):number
{

	var count = 0;
	var x:number, y:number, row:number[], value:number;
	var visited:boolean[][] = [];

	for(y = 0; y<matrix.length; y++)
	{
		row = matrix[y];

		for(x = 0; x<row.length; x++)
		{
			value = row[x];
			if(check()) count++;
		}
	}

	function alreadyChecked(x:number, y:number):boolean
	{
		let vRow = visited[y];
		if(!vRow) visited[y] = vRow = [];
		let result = !!vRow[x];

		vRow[x] = true;

		return result;
	}

	function check():boolean
	{

		if(alreadyChecked(x, y)) return false;

		if(value)
		{
			checkXY(x, y + 1);
			x += checkXY(x + 1, y);
		}

		return !!value;
	}

	function checkXY(x1:number, y1:number):number
	{

		if(x1>=0 && y1>=0
			&& y1<matrix.length
			&& x1<matrix[y1].length
			&& !alreadyChecked(x1, y1)
			&& matrix[y1][x1])
		{
			checkXY(x1 - 1, y1);
			checkXY(x1, y1 - 1);
			checkXY(x1, y1 + 1);

			return checkXY(x1 + 1, y1) + 1;
		}

		return 0;
	}

	return count;
}