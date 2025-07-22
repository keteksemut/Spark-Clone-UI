import re
import json
import os # Import the os module for file operations

def multiline_input(prompt_msg, end_marker="EOF"):
    """
    Collects multiline input from the user until a specific end marker is entered.

    Args:
        prompt_msg (str): The message to display to the user before input.
        end_marker (str): The string that, when entered on a new line, signals the end of input.

    Returns:
        str: The collected multiline input as a single string.
    """
    print(f"{prompt_msg} (type '{end_marker}' on a new line to finish):")
    lines = []
    while True:
        try:
            line = input()
            if line.strip() == end_marker:
                break
            lines.append(line)
        except EOFError: # Handle potential EOF if input is redirected
            print("\nEOF encountered, ending input.")
            break
    return '\n'.join(lines)

def convert_js_object_to_json(js_text):
    """
    Converts a JavaScript-style object string into a valid JSON string.
    Specifically, it quotes unquoted keys and removes trailing commas.

    Args:
        js_text (str): The input string representing a JS-style object.

    Returns:
        str: A valid JSON string.
    """
    # Convert JS-style object to valid JSON
    # Quote unquoted keys (words followed by a colon)
    js_text = re.sub(r'(\w+):', r'"\1":', js_text)
    # Remove trailing commas before closing braces or brackets
    js_text = re.sub(r',\s*([}\]])', r'\1', js_text)
    return js_text

def replace_class_names(css, mapping):
    """
    Replaces full class names in CSS with their corresponding short names
    based on the provided mapping.

    Args:
        css (str): The CSS content as a string.
        mapping (dict): A dictionary where keys are full class names
                        and values are the short names to replace them with.

    Returns:
        str: The CSS content with class names replaced.
    """
    # Sort mapping items by length of the full_class in descending order
    # This prevents issues where a shorter class name might be a substring
    # of a longer one and get replaced prematurely.
    sorted_mapping_items = sorted(mapping.items(), key=lambda item: len(item[0]), reverse=True)

    for full_class, short_name in sorted_mapping_items:
        # Create a regex pattern to match the full class name as a whole word
        # \b ensures word boundaries, so "my-class" doesn't match "my-class-extra"
        # re.escape handles special characters in class names if any
        pattern = re.compile(rf'\b{re.escape(full_class)}\b')
        css = pattern.sub(short_name, css)
    return css

# --- Main execution ---

# Step 1: Get the class map (JS-style)
map_input = multiline_input("Paste your JS-style class map", end_marker="EOF")
class_map = {}
try:
    json_text = convert_js_object_to_json(map_input)
    class_map = json.loads(json_text)
    print("✅ Class map parsed successfully.")
except json.JSONDecodeError as e:
    print(f"❌ Error parsing class map (JSON format issue): {e}")
    print("Please ensure the map is a valid JS object/JSON structure.")
    exit()
except Exception as e:
    print(f"❌ An unexpected error occurred while parsing class map: {e}")
    exit()

# Step 2: Reverse the map
# We need to replace short names in CSS with full names, so we reverse the map
reverse_map = {v: k for k, v in class_map.items()}
print("✅ Class map reversed for replacement.")

# Step 3: Get the CSS
css_input = multiline_input("Paste your CSS content", end_marker="EOF")
print("✅ CSS content received.")

# Step 4: Replace and get updated CSS
updated_css = replace_class_names(css_input, reverse_map)
print("✅ Class names replaced in CSS.")

# Step 5: Ask for output filename and write to file
output_filename = input("\nEnter the desired output filename (e.g., output.css): ").strip()

if not output_filename:
    print("❌ No output filename provided. Output will only be printed to console.")
    print("\n✅ Updated CSS:\n")
    print(updated_css)
else:
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(updated_css)
        print(f"\n🎉 Successfully wrote updated CSS to '{output_filename}'")
    except IOError as e:
        print(f"❌ Error writing to file '{output_filename}': {e}")
        print("\n✅ Updated CSS (printed to console due to file error):\n")
        print(updated_css)
    except Exception as e:
        print(f"❌ An unexpected error occurred while writing to file: {e}")
        print("\n✅ Updated CSS (printed to console due to file error):\n")
        print(updated_css)

