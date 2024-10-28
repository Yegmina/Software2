class Publication:
    def __init__(self, name):
        self.name = name
    def print(self):
        print(f"Name={self.name}")

class Book(Publication):
    def __init__(self, name, author, page_count):
        super().__init__(name)
        self.author = author
        self.page_count = page_count

    def print(self):
        super().print()
        print(f"Author={self.author}")
        print(f"Pages={self.page_count}")

class Magazine(Publication):
    def __init__(self, name, chief_editor):
        super().__init__(name)
        self.chief_editor = chief_editor

    def print(self):
        super().print()
        print(f"Chief Editor={self.chief_editor}")

magazine1=Magazine("Donald Duck", "Aki Hyypä")
magazine1.print()
print("----------------------------------")
book1=Book("Compartment N6", "Rosa Likson", 192)
book1.print()