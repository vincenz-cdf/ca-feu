import sys

def load_file(filename):
    try:
        with open(filename, 'r') as file:
            return [line.strip() for line in file.readlines()]
    except FileNotFoundError:
        print(f"Le fichier {filename} n'est pas trouvé.")
        sys.exit(1)
    except Exception as e:
        print(f"Erreur lors de la lecture du fichier {filename}: {str(e)}")
        sys.exit(1)

def find_pattern(board, pattern):
    board_height, board_width = len(board), len(board[0])
    pattern_height, pattern_width = len(pattern), len(pattern[0])
    
    for i in range(board_height - pattern_height + 1):
        for j in range(board_width - pattern_width + 1):
            found = True
            for x in range(pattern_height):
                for y in range(pattern_width):
                    if pattern[x][y] != ' ' and pattern[x][y] != board[i+x][j+y]:
                        found = False
                        break
                if not found:
                    break
            if found:
                return i, j
    return None

def main(board_filename, pattern_filename):
    board = load_file(board_filename)
    pattern = load_file(pattern_filename)
    
    position = find_pattern(board, pattern)
    
    if position:
        print("Trouvé !")
        print(f"Coordonnées : {position[0]+1},{position[1]+1}")
        print("----")
        for line in pattern:
            print(line)
    else:
        print("Introuvable")

if len(sys.argv) != 3:
    print("Usage: python3 exo.py <board_filename> <pattern_filename>")
else:
    main(sys.argv[1], sys.argv[2])
