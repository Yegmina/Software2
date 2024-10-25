class Car:
    def accelerate(self, speed_changer):
        speed_changer=int(speed_changer)
        #self.current_speed=self.current_speed+speed_changer
        self.current_speed = max(0, min(self.current_speed + speed_changer, self.maximum_speed))

        """if self.current_speed<=0:
            self.current_speed=0
            print(f"speed of the car is 0 so car stopped")
        elif self.current_speed>self.maximum_speed:
            print(f"speed reached the limit, now it is {self.current_speed}")
            self.current_speed=self.maximum_speed
        else:
            print(f"now speed is {self.current_speed}")"""
        print(f"now speed is {self.current_speed}")

        return self.current_speed #to have ability to write speed=accelerate...

    def __init__(self, registration_number, maximum_speed, current_speed=0, travelled_distance=0):
        self.registration_number = registration_number
        self.maximum_speed = maximum_speed
        self.current_speed = current_speed
        self.travelled_distance = travelled_distance

"""main"""
car1=Car("ABC-123",142)
print(vars(car1)) #print all properties of car1 object

car1.accelerate(30)
car1.accelerate(70)
car1.accelerate(50)
car1.accelerate(-200)
