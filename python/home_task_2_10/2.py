import time

class Elevator:
    def __init__(self, min_floor, max_floor):
        self.min_floor = min_floor
        self.max_floor = max_floor
        self.current_floor = min_floor
    def go_to_floor(self, floor):
        time.sleep(3)

        if floor<self.min_floor or floor>self.max_floor:
            print("wrong floor, check elevator limits")
            return False
        print(f"Elevator going to floor {floor} from floor {self.current_floor}")
        while floor!=self.current_floor:
            if floor < self.current_floor:
                self.floor_down()
            elif floor > self.current_floor:
                self.floor_up()
            else:
                print("some logical error");
            time.sleep(1)
        print("Elevator is in needed floor");

    def floor_up(self):
            self.current_floor += 1
            print("we went one floor up, current floor: ", self.current_floor)

    def floor_down(self):
            self.current_floor -= 1
            print("we went one floor down, current floor: ", self.current_floor)
            return 0

class Building:
    def __init__(self, min_floor, max_floor, elevators_amount):
        self.min_floor = min_floor
        self.max_floor = max_floor
        self.elevators_amount = elevators_amount
        self.create_elevators()

    def create_elevators(self):
        self.elevators = []
        while len(self.elevators) <= self.elevators_amount:
            self.elevators.append(None) #to prevent error index out of range in next loop
        for i in range(1, self.elevators_amount+1):
            print(i)

            self.elevators[i]=Elevator(self.min_floor, self.max_floor)

    def run_elevator(self, floor, number_elevator):
        self.elevators[number_elevator].go_to_floor(floor)





"""
h=Elevator(-2, 5)
h.go_to_floor(2)
h.go_to_floor(0)
h.go_to_floor(-5)
h.go_to_floor(0)
"""
building1 = Building(-2, 5, 5)
building1.run_elevator(0, 1)
building1.run_elevator(2, 2)
building1.run_elevator(5, 3)
building1.run_elevator(-2, 5)