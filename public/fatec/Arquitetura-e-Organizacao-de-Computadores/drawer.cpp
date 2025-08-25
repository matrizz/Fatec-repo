#include <iostream>
#include <string>
#include <cmath>

using namespace std;

struct Horizontal
{
    string ch = "─";
    int size = 5;
    bool corners = true;
    bool mirrored = false;
    string startWith = "";
    string endWith = "";
};

struct Vertical
{
    string ch = "│";
    int gap = 5;
    string position = "start";
    bool single = false;
    string startWith = "";
    string endWith = "";
};

void draw_horizontal(Horizontal h)
{
    string draw = "";
    for (int i = 0; i < h.size; i++)
    {
        draw += h.ch;
    }

    if (h.corners)
    {
        string corners[4] = {"┌", "┐", "└", "┘"};
        if (h.mirrored)
        {
            draw = corners[2] + draw + corners[3];
        }
        else
        {
            draw = corners[0] + draw + corners[1];
        }
    }

    draw = h.startWith + draw + h.endWith;
    cout << draw << endl;
}

void draw_vertical(Vertical v)
{
    string draw = "";
    string gaps = "";
    for (int i = 0; i < v.gap; i++)
        gaps += ' ';

    if (v.position == "middle")
    {
        int pos = floor(v.gap / 2.0);
        draw = gaps.substr(0, pos) + v.ch + gaps.substr(pos);
        if (!v.single)
            draw += v.ch;
    }
    else if (v.position == "end")
    {
        draw = gaps;
        draw += v.single ? v.ch + gaps : v.ch + gaps + v.ch;
    }
    else
    { // start
        draw = v.ch + gaps + v.ch;
    }

    draw = v.startWith + draw + v.endWith;
    cout << draw << endl;
}

int main()
{
    draw_horizontal({"─", 6});
    draw_vertical({"│", 6});
    draw_vertical({"│", 6});
    draw_horizontal({"─", 6, true, true});
    draw_vertical({"│", 6, "middle", true});
    draw_horizontal({"─", 6});
    draw_vertical({"│", 6});
    draw_vertical({"│", 6});
    draw_horizontal({"─", 6, true, true});
    draw_vertical({"│", 4, "middle"});

    return 0;
}
