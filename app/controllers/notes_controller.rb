class NotesController < ApplicationController
  def index
    @notes = Note.all

    render component: "Notes", props: {notes: @notes}
  end

  def show
    @note = Note.find(params[:id])

    render component: "Note", props: {note: @note}
  end

  def new
    render component: "NoteNew"
  end

end
