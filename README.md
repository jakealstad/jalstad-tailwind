# jalstad-tailwind
experimenting with tailwind - rewrote personal site using it

# local dev

## flask
* python3 -m venv venv
	* source venv/bin/activate
	* pip install -r requirements.txt
	* flask --app app run --debug

## tailwind
* npx tailwindcss -i static/main.css -o static/output.css --watch